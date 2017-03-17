import { observable,computed } from 'mobx'
import { browserHistory } from 'react-router';

class TableStore {
	@observable TABLE = {}
	@observable tables = []
	@observable columns = []
	@observable columnsData = []
	@observable hiddenColumns = []
	@observable rowsToDelete = []
	@observable recordsToShow = 20
	@observable appId = null

	@computed get getColumns(){
		if(this.columns.document){
			return this.columns.document.columns.map( x => x.document )
		} else {
			return []
		}
	}
	@computed get getColumnsData(){
		return this.columnsData.map( x => x.document )
	}
	@computed get getTables(){
		return this.tables.map( x => x.document )
	}

	initialize(appId,tableName){
		CB.CloudTable.getAll().then((data)=>{
			if(data[0]){
				this.TABLE = data[0].document.name
			}
			if(tableName){
				let tableFound = data.filter(x => x.document.name == tableName)[0]
				if(tableFound) this.TABLE = tableFound.document.name
			}

			this.appId = appId
			this.tables = data
			this.recordsToShow = 20
			this.setColumns()
			this.setColumnsData()
		})
	}
	changeTable(tableName){
		browserHistory.push("/"+this.appId+"/"+tableName)
		this.TABLE = tableName
		this.recordsToShow = 20
		this.setColumns()
		this.setColumnsData()
	}
	createTable(tableName){
		let table = new CB.CloudTable(tableName)
		table.save().then((res)=>{
			this.initialize(tableName)
		},(err)=>{
			this.showSnackbar("Error creating a table, please try again.")
			console.log(err)			
		})
	}
	deleteTable(tableName){
		let table = this.tables.filter(x=> x.document.name == tableName)[0]
		table.delete().then((res)=>{
			this.initialize()
		},(err)=>{
			this.showSnackbar("Error deleting this table, please try again.")
			console.log(err)
		})
	}
	addColumn(column){
		let table = this.tables.filter(x=> x.document.name == this.TABLE)[0]
		table.addColumn(column);
		table.save().then((res)=>{
			this.setColumns()
			this.setColumnsData()
			// scroll to the extreme left of the table
			setTimeout(()=>{
				$('#datatable').scrollLeft($('#datatable').outerWidth())
			},500)
		},(err)=>{
			this.showSnackbar("Cannot add a column, please try again.")
			console.log(err)
		})
	}
	deleteColumn(column){
		let table = this.tables.filter(x=> x.document.name == this.TABLE)[0]
		table.deleteColumn(column);
		table.save().then((res)=>{
			this.setColumns()
			this.setColumnsData()
		},(err)=>{
			this.showSnackbar("Cannot delete this column, please try again.")
			console.log(err)
		})
	}
	editColumn(columnName,uniqueValue,requiredValue){
		let table = this.tables.filter(x=> x.document.name == this.TABLE)[0]
		let column = table.getColumn(columnName)
		column['required'] = requiredValue
		column['unique'] = uniqueValue
		table.updateColumn(column);
		table.save().then((res)=>{
			this.setColumns()
			this.setColumnsData()
		},(err)=>{
			this.showSnackbar("Error editiing this column, please try again.")
			console.log(err)
		})
	}
	setColumns(){
		CB.CloudTable.get(this.TABLE).then((data)=>{
			this.columns = data
		})
	}
	setColumnsData(){
		let query = new CB.CloudQuery(this.TABLE)
		query.setLimit(this.recordsToShow)
		query.find().then((list)=>{
			this.columnsData = list
		})
	}
	showNextRecords(limit){
		this.recordsToShow += limit
		let query = new CB.CloudQuery(this.TABLE)
		query.setLimit(this.recordsToShow)
		query.find().then((list)=>{
			if(this.columnsData.length != list.length) this.columnsData = list
		})
	}
	sortColumnsData(what,columnName){
		let query = new CB.CloudQuery(this.TABLE)
		query.setLimit(20);
		query[what](columnName);
		query.find().then((list)=>{
			this.columnsData = list
		})
	}

	search(searchString){
		let query = new CB.CloudQuery(this.TABLE)
		query.setLimit(this.recordsToShow)
		if (searchString) query.search(searchString)
		return query.find()
	}

	updateColumnsData(data){
		this.columnsData = data
	}

	addRow(data){
		data.save().then((res)=>{
			this.columnsData.push(data)
		},(err)=>{
			data.error = err
			this.columnsData.push(data)
		})
	}

	hideColumn(name){
		this.hiddenColumns = this.hiddenColumns.concat([name])
	}

	removeHiddenColumn(name){
		this.hiddenColumns = this.hiddenColumns.filter(x => x != name)
	}

	showAll(){
		this.hiddenColumns = this.hiddenColumns.filter(x => false)
	}

	addToDeleteRows(objectId){
		this.rowsToDelete.push(objectId)
	}
	removeFromDeleteRows(objectId){
		this.rowsToDelete.splice(this.rowsToDelete.indexOf(objectId),1)
	}
	deleteRows(){
		let prm = []
		this.columnsData.map((x)=>{
			this.rowsToDelete.forEach((i,index)=>{
				if(i == x.id){
					prm.push(x.delete())
				} 
			})
		})
		Promise.all(prm).then((res)=>{
			$('[data-row]').removeClass('lgrey')
			this.setColumnsData()
			this.rowsToDelete = []
		})
	}
	showLoader(){
		$('#table').addClass('hide')
		$('#tableoverlap').addClass('hide')
		$('#loader').removeClass('hide')
	}
	hideLoader(){
		$('#table').removeClass('hide')
		$('#tableoverlap').removeClass('hide')
		$('#loader').addClass('hide')
	}
	showTopLoader(){
		$('.searchheading').hide(500)
		$('#loaderTop').show(500)
	}
	hideTopLoader(){
		$('#loaderTop').hide(500)
		$('.searchheading').show(500)
	}
	showSnackbar(text,type){
		Messenger().post({
			message: text,
			type: type || 'error',
			showCloseButton: true
		});
	}

}

export default new TableStore()
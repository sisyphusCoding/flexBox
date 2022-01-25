

window.addEventListener('DOMContentLoaded', () => {
	
	var app = document.getElementById('app')
	
	app.style.display = 'flex'
	
	
	
	var flexFlow = document.getElementsByName('flex-flow')

	flexFlow.forEach(flexF => {
	if(flexF.checked){
		app.style.flexFlow = flexF.value
			if(flexF.value === 'row'){
			app.setAttribute("data-major","major-axis >")
			app.setAttribute("data-cross","cross-axis >")
		}
	}
	})
	
	
	var itemsAlign = document.getElementsByName('align-items')

		itemsAlign.forEach(itemsAL  => {
		if(itemsAL.checked){
			app.style.alignItems = itemsAL.value
		}
	})
	
	
		var contentJust = document.getElementsByName('justify-content')

		contentJust.forEach(contJ  => {
		if(contJ.checked){
			app.style.justifyContent = contJ.value
		}
	})
	
})


var flexFlow = document.getElementsByName('flex-flow')

flexFlow.forEach(flexOpt => addEventListener('change', () => {
	if(flexOpt.checked){
		console.log(flexOpt.checked)
		app.style.flexFlow = flexOpt.value
		if(flexOpt.value === 'column'){
			app.setAttribute("data-major","cross-axis >")
			app.setAttribute("data-cross","major-axis >")
		} else if (flexOpt.value === 'row'){
			app.setAttribute("data-major","major-axis >")
			app.setAttribute("data-cross","cross-axis >")
		}
	}
})
)





var itemsAlign = document.getElementsByName('align-items')

itemsAlign.forEach(itemsAL => addEventListener('change', () => {
	if(itemsAL.checked){
		app.style.alignItems = itemsAL.value
	}
})
)



var contentJust = document.getElementsByName('justify-content')

contentJust.forEach(contJ => addEventListener('change', () => {
	if(contJ.checked){
		app.style.justifyContent = contJ.value
	}
})
)





																					
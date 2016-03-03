/**
 * script Poo
 * @return {[type]} [description]
 */
(function() {
	self.Controller = function(contenedor) {
		this.context = contenedor;
	};

	self.Controller.prototype = {
		openModal: function() {
			var elm = lanzarModal(this.context);
			//console.log(elm);
			return elm;
		}
	};
})();

function lanzarModal(contexto) {
	var element = document.getElementById(contexto.id);
	return element;
}

/**
 * jQuery Events
 * @param  {String} ) {	$('#aboutLink').click(function (evt) {		var id [description]
 * @return {[type]}   [description]
 */
$(document).ready(function() {
	$('#aboutLink').click(function (evt) {
		var id = 'myModal';
		var obj = new Controller(myModal);
		var elementID = obj.openModal();
		$('#myModal').modal();
	});
});
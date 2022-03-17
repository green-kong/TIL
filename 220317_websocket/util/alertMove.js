function alertMove(path, msg){
	return `<script type="text/javascript">
    alert("${msg}")
    location.href="${path}"
    </script>`;
} 

module.exports = { alertMove }; 
function alertmove(path, msg) {
  return `<script>
            alert('${msg}')
            location.href = '${path}'
            </script>`;
}

module.exports = alertmove;

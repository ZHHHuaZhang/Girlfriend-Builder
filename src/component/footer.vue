<template>
    <footer class="flex -end">
        <a href="https://github.com/">
        	<span class="fui-github"></span>
		</a>
        <a href="https://github.com/">
        	<span class="fui-wechat"></span>
		</a>
        <a href="https://github.com/">
        	<span class="fui-gitlab"></span>
		</a>
    </footer>
</template>
<!--  -->
<script>
	var ex = {
		name: "cFooter"
	};
	module.exports = ex;
</script>
<!--  -->
<style>
	footer .fui-github:before{
		content: "\e65c";
	}
	footer{
		position: fixed;
		bottom: 1vw;
		right: 2vw;
		font-size: 2rem;
	}
</style>
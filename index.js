#!/usr/bin/env node

const pkgJSON = require('./package.json')
const welcome = require('cli-welcome')

welcome({
	title: pkgJSON.name,
	tagLine: `Howdy, nice to meet ya!`,
	description: pkgJSON.description,
	version: pkgJSON.version,
	bgColor: `#FADC00`,
	color: `#000000`,
	bold: true,
	clear: true,
})

console.log(`
Hi there, This is Santosh Subedi - AKA SantoshCode
- I'm a Stack Engineer[beta]sparkles
- I’m currently working as a Full Stack Developer!
- I’m currently learning AI for production
- Fun fact: I love to watch thriller movies/series!
`)

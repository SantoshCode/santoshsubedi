#!/usr/bin/env node

const pkgJSON = require('./package.json')
const welcome = require('cli-welcome')
const chalk = require('chalk')
const dim = chalk.dim
const italic = chalk.italic
const twitterClr = chalk.hex(`#1da1f2`).bold.inverse
const githubClr = chalk.hex(`#6cc644`).bold.inverse
const purple = chalk.hex(`#6937FF`).bold.inverse
welcome({
	title: `Santosh Subedi`,
	tagLine: `Howdy, nice to meet ya!`,
	description: pkgJSON.description,
	version: pkgJSON.version,
	bgColor: `#6937FF`,
	color: `#000000`,
	bold: true,
	clear: true,
})

console.log(`${italic(`
Hi there, This is Santosh Subedi - AKA SantoshCode
- I'm a Stack Engineer[beta]sparkles
- I’m currently working as a Full Stack Developer!
- I’m currently learning AI for production
- Fun fact: I love to watch thriller movies/series!
`)}

😹 ${twitterClr(` Twitter `)}  ${dim(`https://twitter.com/iam_santoshcode`)}
🔂 ${githubClr(` Github `)}   ${dim(`https://github.com/santoshcode`)}
🤘 ${purple(` Site `)}     ${dim(`http://santoshsubedi.com.np`)}

`)

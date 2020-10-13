#!/usr/bin/env node

const pkgJSON = require('./package.json')
const welcome = require('cli-welcome')
const chalk = require('chalk')
const dim = chalk.dim
const italic = chalk.italic
const twitterClr = chalk.hex(`#1da1f2`).bold.inverse
const githubClr = chalk.hex(`#6cc644`).bold.inverse
const purple = chalk.hex(`#6937FF`).bold.inverse

// Alerts.
const sym = require('log-symbols')
const success = chalk.green.inverse
const info = chalk.blue.inverse
const warning = chalk.keyword('orange').inverse
const error = chalk.red.bold.inverse

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

console.log(`
${sym.success} ${success(` SUCCESS `)}: Thanks for checking out my CLI.

${sym.info} ${info(` INFO `)}: I'm creating a CLI Tool.

${sym.warning} ${warning(` WARNING `)}: Pleasse don't copy me.

${sym.error} ${error(` ERROR `)}: I'm on vacation. Contact me next week.
`)

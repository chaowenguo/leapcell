import child_process from 'child_process'
import path from 'path'
import {promises as fs} from 'fs'
import Koa from 'koa'
import serve from 'koa-static'
import list from 'koa2-serve-index'

const app = new Koa()
app.use(list(import.meta.dirname)).use(serve(import.meta.dirname))
//child_process.spawn('dotnet', [path.join(import.meta.dirname, 'Cli.dll'), 'start', 'accept', '--token', 'ELGPy/DEQYDtARslA6HnkrbPIF6JQi+qYLCre5LBe58='])
//child_process.spawn(path.join(import.meta.dirname, 'bitpingd'))
process.argv = [process.execPath, 'script.js', '--homeIp', 'point-of-presence.sock.sh', '--homePort', '443','--id', 'leapcell', '--version', '54', '--clientKey', 'proxyrack-pop-client', '--clientType', 'PoP']
import('./script.js')
app.listen(8080)

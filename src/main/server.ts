import 'module-alias/register'
import app from '@/main/configs/app'
import { env } from '@/main/configs/env'

const port = env.port
const url = `http://localhost:${port}`

app.listen(port, () => console.log(`server running at : ${url}`))
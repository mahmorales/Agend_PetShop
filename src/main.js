// Configuração do Babel / JS moderno
"use strict"
// Configuração do Babel / JS moderno
"use strict"

// Importação dos estilos CSS
import "./styles/global.css"
import "./styles/header.css"
import "./styles/schedule.css"
import "./styles/modal.css"

// Importação da biblioteca de data
import "./libs/dayjs.js"

// Importação dos Módulos da aplicação
import "./modules/page-load.js"
import "./modules/schedules/cancel.js"
import "./modules/form/modal.js" // O arquivo que abriu o modal que fizemos antes

// ---> ADICIONE ESTAS DUAS LINHAS <---
import "./modules/form/submit.js"
import "./modules/form/date-change.js"
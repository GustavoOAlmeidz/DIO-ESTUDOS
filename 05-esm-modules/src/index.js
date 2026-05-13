import {conectarNoBancoDeDados, databaseType, disconectarDoBancoDeDados} from "./utils/database.js"
import { getDataFromApi } from "./utils/api.js"

conectarNoBancoDeDados("my-database");
disconectarDoBancoDeDados();
getDataFromApi();

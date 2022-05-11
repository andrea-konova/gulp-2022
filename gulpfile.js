// основной модуль
import gulp from "gulp";
// импорт путей
import { path } from "./gulp/config/path.js";

// передаем значения в глобальную переменную
global.app = {
  path: path,
  gulp: gulp
}

// импорт задач
import { copy } from "./gulp/tasks/copy.js";

// выполненеие сценария по умолчанию
gulp.task('default', copy);
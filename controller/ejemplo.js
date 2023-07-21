var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { validate } from 'class-validator';
function validarDTO(dto) {
    return __awaiter(this, void 0, void 0, function* () {
        const errors = yield validate(dto);
        if (errors.length > 0) {
            console.log('Errores de validación:', errors);
            // Aquí puedes lanzar una excepción o manejar los errores de otra manera
        }
    });
}
// Ejemplo de uso:
const dto = new YourDTOClass();
dto.email = 'angelajurado@gmail.com';
dto.telefono = '3118124321';
dto.apodo = 'Angie';
await validarDTO(dto);

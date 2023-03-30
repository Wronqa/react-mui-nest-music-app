import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { UseInterceptors } from '@nestjs/common/decorators';
import { plainToInstance } from 'class-transformer';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

interface ClassInterface {
  new (...args: [any]): object;
}
export const Serialize = (dto: ClassInterface) => {
  return UseInterceptors(new SerializeInterceptor(dto));
};
@Injectable()
export class SerializeInterceptor implements NestInterceptor {
  constructor(private dto: ClassInterface) {}
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map((data: any) => {
        return plainToInstance(this.dto, data, {
          excludeExtraneousValues: true,
        });
      }),
    );
  }
}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodosModule } from './todos/todos.module';
import { Todos } from './todos/todos.entity';
import { Label } from './label/label.entity';
import { LabelModule } from './label/label.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'nest_init',
      entities: [Todos, Label],
      synchronize: true,
    }),
    TodosModule,
    LabelModule,

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }

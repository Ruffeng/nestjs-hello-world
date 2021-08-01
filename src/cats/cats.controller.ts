import { Body, Controller, Get, Param, Post, UseFilters } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cats.dto';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';
import { ForbiddenException } from 'src/conf/forbidden.exception';
import { HttpExceptionFilter } from 'src/conf/http-exception.filter';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Post()
  @UseFilters(HttpExceptionFilter)
  async create(@Body() createCatDto: CreateCatDto) {
    throw new ForbiddenException();
  }

  @Get(':id')
  findOne(@Param('id') id: string): string {
    console.log(id);
    return `This action returns a #${id} cat`;
  }

  @Get()
  async findAll(): Promise<Cat[]> {
    throw new ForbiddenException();
  }
}

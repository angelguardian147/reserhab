import { Test, TestingModule } from '@nestjs/testing';
import { IAccount } from 'src/interfaces/account.interface';
import { IHome } from 'src/interfaces/home.interface';
import { JwtResponse } from 'src/interfaces/jwt-response.interface';
import { IUser } from 'src/interfaces/user.interface';
import { HomeService } from './home.service';

describe('HomeService', () => {
  let service: HomeService;
  
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HomeService],
    }).compile();

    service = module.get<HomeService>(HomeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('este metodo deberia crear una cuenta', () => {
    expect(service.create(home, user)).toBeDefined();
  });

});

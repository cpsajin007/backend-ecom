// import { Injectable } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm';
// import { Repository } from 'typeorm';
// import { Product } from './entities/ecomproduct.entity';

// @Injectable()
// export class EcomproductsService {
//   constructor(
//     @InjectRepository(Product)
//     private productsRepository: Repository<Product>,
//   ) {}

//   async findAll(): Promise<Product[]> {
//     return this.productsRepository.find();
//   }
//   async findOne(id: number): Promise<Product> {
//     return this.productsRepository.findOne({ where: { id } });
//   }
//   async findCategories(): Promise<string[]> {
//     // Implement logic to fetch all available category names
//     const products = await this.productsRepository.find();
//     const categories = new Set<string>();
//     products.forEach(product => categories.add(product.category));
//     return Array.from(categories);
//   }
// }
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';
import { Product } from './entities/ecomproduct.entity';

@Injectable()
export class EcomproductsService {
  constructor(
    @InjectRepository(Product)
    private productsRepository: Repository<Product>,
  ) {}

  async findAll(): Promise<Product[]> {
    return this.productsRepository.find();
  }
 
  // async findOne(id: number): Promise<Product> {
  //   return this.productsRepository.findOneBy({id:id});
    
  // }
   async findCategories(): Promise<any> {
    // Implement logic to fetch all available category names
     const products = await this.productsRepository.find();
     console.log("hhhhh",products)
     const categories = new Set<string>();
     products.forEach(product => categories.add(product.category));
     return Array.from(categories);
    
  }

  async findOne(id: number) {
    return  await this.productsRepository.findOne({
      where: { id: id },
    });
  }
  async findCategoriesName(category:string) {
    return  await this.productsRepository.find({
      where: { category: category }
    });
  }
  async searchProducts(query: string): Promise<Product[]> {
    try {
      const products = await this.productsRepository.find({
        where: { title: Like(`%${query}%`) }
      });
      return products;
    } catch (error) {
      console.error('Error occurred while searching products:', error);
      throw error;
    }
  }
  
}

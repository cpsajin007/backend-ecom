import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn } from 'typeorm';

@Entity({ name: 'ecomproducts' })
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  price: number;
  @Column()
  discount_percentage: number
  @Column()
    rating: number
    @Column()
    stock: number
    @Column()
    brand: string
    @Column()
    category: string
    @Column()
    thumbnail: string
    @Column()
    images: string

}
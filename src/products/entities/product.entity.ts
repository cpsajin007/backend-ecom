import { CategoryEntity } from 'src/categories/entities/category.entity';
import { OrdersProductsEntity } from 'src/orders/entities/orders-products.entity';
import { ReviewEntity } from 'src/reviews/entities/review.entity';
import { UserEntity } from 'src/users/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  Timestamp,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'products' })
export class ProductEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column({ type: 'decimal', precision: 10, scale: 2, default: 0 })
  price: number;

  @Column()
  stock: number;

  @Column('simple-array')
  images: string[];

  @CreateDateColumn()
  createdAt: Timestamp;

  @UpdateDateColumn()
  updatedAt: Timestamp;
 //relation ship
 //user can create multiple product-ManyToOne
 //in userentity we create onetomanyrelationship
  @ManyToOne(() => UserEntity, (user) => user.products)
  addedBy: UserEntity;
  //user can create multiple categories-ManyToOne
  @ManyToOne(() => CategoryEntity, (cat) => cat.products)
  category: CategoryEntity;

  @OneToMany(() => ReviewEntity, (rev) => rev.product)
  reviews: ReviewEntity[];

  @OneToMany(() => OrdersProductsEntity, (op) => op.product)
  products: OrdersProductsEntity[];
}

import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, JoinTable, ManyToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { BookEntity } from "./books.entity";




@Entity('authors', { schema: 'ventas' })

export class AuthorEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @CreateDateColumn({
        name: 'create_at',
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP',
    })
    CreateAt: Date;

    @UpdateDateColumn({
        name: 'update_At',
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP',
    })
    UpdateDateColumn: Date;

    @DeleteDateColumn({
        name: 'delete_at',
        type: 'timestamp',
        nullable: true,
    })
    deleteAt: Date;

    @ManyToMany(() => BookEntity, author => author.books)
    @JoinTable()
    Authors: AuthorEntity[];
    
    @Column('varchar', {
        name: 'name',
        nullable: false,
        comment: 'user name'
    })
    name: string;

    @Column('varchar', {
        name: 'lastname',
        nullable: false,
        comment: 'user lastname'
    })
    lastname: string;

    @Column('varchar', {
        name: 'email',
        nullable: true,
        comment: 'email user'
    })
    email: string;
    books: any;
 





    
   

}
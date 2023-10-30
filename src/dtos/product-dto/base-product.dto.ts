import { Allow, IsAlpha, IsAlphanumeric, IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString } from "class-validator";
import { ProductEntity } from "src/entities/product.entity";
/*AQUI VAN TODAS LAS VALIDACIONES:)*/ 
export class BaseProductDto {
    @Allow()
    @IsNotEmpty()
    @IsString()
    readonly title: ProductEntity;


    @IsNotEmpty()
    @IsNumber()
    @IsPositive()
    readonly price: ProductEntity;


    @IsOptional()
    @IsString()
    @IsAlphanumeric()
    readonly description: ProductEntity;


    @IsNotEmpty()
    @IsString()
    @IsAlphanumeric()
    readonly image: ProductEntity;


    

}
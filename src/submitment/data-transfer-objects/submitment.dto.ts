import { IsArray, IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString } from "class-validator";

export class SubmitmentDto {
  @IsString()
  @IsNotEmpty()
  code: string;

  @IsString()
  @IsNotEmpty()
  language: string;

  @IsArray()
  @IsOptional()
  report: string[];

  @IsOptional()
  @IsNumber()
  score: number;

  @IsNumber()
  @IsPositive()
  @IsOptional()
  userId: number;

  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  problemId: number;
}

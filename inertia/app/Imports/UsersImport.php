<?php

namespace App\Imports;

use App\Models\User;
use Maatwebsite\Excel\Concerns\ToModel;

use Maatwebsite\Excel\Concerns\Importable;
use Maatwebsite\Excel\Concerns\WithValidation;
use Maatwebsite\Excel\Concerns\WithHeadingRow;
use Maatwebsite\Excel\Concerns\SkipsOnError;
use Maatwebsite\Excel\Concerns\SkipsErrors;

class UsersImport implements ToModel, WithHeadingRow, SkipsOnError ,WithValidation
{   use Importable;



       public function rules(): array
    {
        return [
            'batch_from_to' => 'nullable',
        ];
    }

    public function model(array $row)
    {  //dd(trim(explode("-",$row["batch_from_to"])[1]));
        // dd($row);
     
        try{
                return new User([
                    "name"=> $row["name_of_the_alumni"],
                    "department"=> $row["department"],
                    "phone"=> $row["mobile_number"],
                    "email"=> $row["personal_e_mail"],
                    "batch_from"=> trim(explode("-",$row["batch_from_to"])[0] ?? ''),
                    "batch_to"=> trim(explode("-",$row["batch_from_to"])[1] ?? ''),
                ]);
    } catch(\ErrorException $e) {
        dd($row);
    }
    }

    public function onError(\Throwable $e)
    {     // Handle the exception how you'd like.   
    }

 
}

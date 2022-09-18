<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Task;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $Tasks = [
            [
                'name'=>'Make laravel project',
                'description'=>'This is the first task , you should make a laravel project and setup configurations.',
                'status'=>1
            ],
            [
                'name'=>'Make Node.js project',
                'description'=>'This is the second task , you should make a node.js project and setup configurations.',
                'status'=>1
            ],
            [
                'name'=>'Use the express library',
                'description'=>'This is the third task , you should install express library in node.js bash terminal.',
                'status'=>0
            ],
            [
                'name'=>'Make Tasks Controller in laravel project',
                'description'=>'you should make a new controller named TasksController',
                'status'=>0
            ],
            [
                'name'=>'Add action method in TasksController',
                'description'=>'Add action method to retrieve all tasks stored in mySql database.',
                'status'=>0
            ]
        ];
        foreach($Tasks as $task)
        {
            Task::create($task);
        }
    }
}

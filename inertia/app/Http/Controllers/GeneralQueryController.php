<?php

namespace App\Http\Controllers;

use App\Models\GeneralQuery;
use Illuminate\Http\Request;

class GeneralQueryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    { 
    $request->validate([
        'name' => 'required|string|max:255',
        'phone' => 'required|string',
        'subject' => 'required|string',
        'query' => 'required|string',
    ]); 
 
    $generalQuery = GeneralQuery::create([
        'name' => $request->name,
        'phone' => $request->phone,
        'subject' => $request->subject,
        'query' => $request->get('query'),
    ]); 

     return redirect('/generalQuery');
    //return $request;

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\GeneralQuery  $generalQuery
     * @return \Illuminate\Http\Response
     */
    public function show(GeneralQuery $generalQuery)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\GeneralQuery  $generalQuery
     * @return \Illuminate\Http\Response
     */
    public function edit(GeneralQuery $generalQuery)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\GeneralQuery  $generalQuery
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, GeneralQuery $generalQuery)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\GeneralQuery  $generalQuery
     * @return \Illuminate\Http\Response
     */
    public function destroy(GeneralQuery $generalQuery)
    {
        //
    }
}

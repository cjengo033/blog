<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class CartController extends Controller
{
    public function addItem(Request $request)
    {
        // code to add an item to the cart
    }

    public function updateItem(Request $request, $id)
    {
        // code to update the quantity of an item in the cart
    }

    public function removeItem($id)
    {
        // code to remove an item from the cart
    }
}

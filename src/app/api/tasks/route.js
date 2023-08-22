import { NextResponse } from "next/server";

export function GET () {

    return NextResponse.json ("Recuperando Tareas...");

}

export function POST () {

    return NextResponse.json ("Creando Tareas...");

}
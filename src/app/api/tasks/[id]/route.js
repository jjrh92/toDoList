import { NextResponse } from "next/server";

export function GET (request, {params}) {

    return NextResponse.json ("Obteniendo Tarea " + params.id)
}

export function PUT (request, {params}) {

    return NextResponse.json ("Actualizando Tarea " + params.id)
}

export function DELETE (request, {params}) {

    return NextResponse.json ("Borrando Tarea " + params.id)
}
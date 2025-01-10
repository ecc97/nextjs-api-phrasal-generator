import { NextResponse } from 'next/server';

const subjects = ["The Dog", "The Turtle", "My friend", "The Big Dog"];
const predicates = ["runs fast", "is very wise", "loves coding", "sings poorly"]

function getSubjectRandom() {
    return subjects[Math.floor(Math.random() * subjects.length)];
}

function getPredicateRandom() {
    return predicates[Math.floor(Math.random() * predicates.length)];
}

export function GET() {
    const subjectRandom = getSubjectRandom();
    const predicateRandom = getPredicateRandom();

    let phrase = ""

    if (subjectRandom.length > 8) {
        phrase = `${subjectRandom} is intelligent`;
    } 
    else if (predicateRandom.includes("coding")) {
        phrase = `${subjectRandom} ${predicateRandom}!`;
    } 
    else {
        phrase = `${subjectRandom} ${predicateRandom}`;
    }

    return NextResponse.json({ 
        phrase 
    });
}
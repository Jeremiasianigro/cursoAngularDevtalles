const skills: string[] = ['Bash','Counter','Healing'];


interface Character {
    name: string;
    hp: number;
    skills: string[];
    hometown?: string;
}

const Jere:Character = {
    name: 'Jere',
    hp: 100,
    skills: ['Bash','Counter']
};

Jere.hometown = 'Rivendell'


console.table(Jere);




export{}
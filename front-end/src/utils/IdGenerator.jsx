function* studySetIdGenerator(ID = 1) {
    let id = ID
    while (true) {
        yield id++
    }
}

function* questionIdGenerator(ID = 1) {
    let id = ID
    while (true) {
        yield id++
    }
}

const generator = studySetIdGenerator()

const questionGenerator = questionIdGenerator()

export const uniqueId = () => generator.next().value

export const questionUniqueId = () => questionGenerator.next().value

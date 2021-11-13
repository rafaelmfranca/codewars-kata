function solution(string) {
    return string.replace(/([A-Z])/g, ' $1')
}

console.log(solution('camelCasing'), 'camel Casing', 'Unexpected result')
console.log(solution('camelCasingTest'), 'camel Casing Test', 'Unexpected result')
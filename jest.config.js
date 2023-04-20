module.exports = {
  roots: ['<rootDir>/src'],
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'], // cobertura de testes dessa pasta
  coverageDirectory: 'coverage', // digo que quero cobertura de teste
  testEnvironment: 'node',
  transform: {
    '.+\\.ts$': 'ts-jest' // transforma o arquivo de teste em js antes de rodar
  }

}

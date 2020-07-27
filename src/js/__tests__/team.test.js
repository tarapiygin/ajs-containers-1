import Team from '../team';
import Character from '../character';


test('should return a list of one character', () => {
  const character = new Character();
  const team = new Team();
  team.add(character);
  const result = [character,];
  expect(team.toArray()).toEqual(result);
});

test('should return an error', () => {
  const character = new Character();
  const team = new Team();
  team.add(character);
  const result = Error('Character has already in members list');
  expect(() => team.add(character)).toThrowError(result);
});

test('should return a list with no duplicate values', () => {
  const character = new Character();
  const character2 = new Character();
  const team = new Team();
  team.addAll(character, character, character2);
  const result = [character, character2];
  expect(team.toArray()).toEqual(result);
});
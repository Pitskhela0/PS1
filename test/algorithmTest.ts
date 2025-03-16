import assert from "assert";
import { AnswerDifficulty, Flashcard, BucketMap } from "../src/flashcards";
import {
  toBucketSets,
  getBucketRange,
  practice,
  update,
  getHint,
  computeProgress,
  isPrime,
} from "../src/algorithm";

/*
 * Testing strategy for toBucketSets():
 *
 * empty map -> empty array
 * 
 * full map :
 * two cases:
 * a. empty sets
 * b. non empty sets
 * 
 */
describe("toBucketSets()", () => {
  let emptyBucket: BucketMap = new Map();

  it("Empty map should return an empty array", () => {
    assert.equal(toBucketSets(emptyBucket).length, 0);
  });

  // Full bucket with empty sets
  let fullBucketEmptySets: BucketMap = new Map();
  fullBucketEmptySets.set(0, new Set());
  fullBucketEmptySets.set(1, new Set());
  fullBucketEmptySets.set(4, new Set());

  it("Full map with empty sets should return correct length and empty sets", () => {
    assert.equal(toBucketSets(fullBucketEmptySets).length, fullBucketEmptySets.size);
    let result: Array<Set<Flashcard>> = toBucketSets(fullBucketEmptySets);

    result.forEach((set, index) => {
      assert.equal(set.size, 0);
    });
  });

  // Full bucket with non-empty sets
  let fullBucketFullSets: BucketMap = new Map();

  let f0: Flashcard = new Flashcard("front0", "back0", "hint0", new Array());
  let s0: Set<Flashcard> = new Set();
  s0.add(f0);

  let f1: Flashcard = new Flashcard("front1", "back1", "hint1", new Array());
  let s1: Set<Flashcard> = new Set();
  s1.add(f1);

  let f2: Flashcard = new Flashcard("front2", "back2", "hint2", new Array());
  let s2: Set<Flashcard> = new Set();
  s2.add(f2);

  fullBucketFullSets.set(0, s0);
  fullBucketFullSets.set(1, s1);
  fullBucketFullSets.set(2, s2);

  let array: Array<Set<Flashcard>> = [s0, s1, s2];

  it("Full map with non-empty sets should match array references", () => {
    assert.equal(toBucketSets(fullBucketFullSets).length, fullBucketFullSets.size);
    let result: Array<Set<Flashcard>> = toBucketSets(fullBucketFullSets);
    result.forEach((set, index) => {
      assert.strictEqual(set, array[index], `Set at index ${index} does not match the expected reference`);
    });
  });

  let negativeIndex: BucketMap = new Map();

  let n0: Flashcard = new Flashcard("front0", "back0", "hint0", new Array());
  let sn0: Set<Flashcard> = new Set();
  sn0.add(n0);
  negativeIndex.set(-1, sn0);

  it("Map with negative key", () => {
    assert.throws(() => toBucketSets(negativeIndex))
  });
});

/*
 * Testing strategy for getBucketRange():
 *
 * TODO: Describe your testing strategy for getBucketRange() here.
 */
describe("getBucketRange()", () => {
  it("Example test case - replace with your own tests", () => {
    assert.fail(
      "Replace this test case with your own tests based on your testing strategy"
    );
  });
});

/*
 * Testing strategy for practice():
 *
 * TODO: Describe your testing strategy for practice() here.
 */
describe("practice()", () => {
  it("Example test case - replace with your own tests", () => {
    assert.fail(
      "Replace this test case with your own tests based on your testing strategy"
    );
  });
});

/*
 * Testing strategy for update():
 *
 * TODO: Describe your testing strategy for update() here.
 */
describe("update()", () => {
  it("Example test case - replace with your own tests", () => {
    assert.fail(
      "Replace this test case with your own tests based on your testing strategy"
    );
  });
});

/*
 * Testing strategy for getHint():
 *
 * TODO: Describe your testing strategy for getHint() here.
 */
describe("getHint()", () => {
  it("Example test case - replace with your own tests", () => {
    assert.fail(
      "Replace this test case with your own tests based on your testing strategy"
    );
  });
});

/*
 * Testing strategy for computeProgress():
 *
 * TODO: Describe your testing strategy for computeProgress() here.
 */
describe("computeProgress()", () => {
  it("Example test case - replace with your own tests", () => {
    assert.fail(
      "Replace this test case with your own tests based on your testing strategy"
    );
  });
});



/*
 * Testing strategy for isPrime():
 *
 * TODO: Describe your testing strategy for computeProgress() here.
 */
describe("isPrime()", () => {
  it("Example test case - replace with your own tests", () => {
    assert.strictEqual(isPrime(4),false);
  });
  it("Example test case - replace with your own tests", () => {
    assert.strictEqual(isPrime(5),true);
  });
});

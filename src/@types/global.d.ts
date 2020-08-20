declare type Either<A, B> = A | B
declare type Optional<T, U = undefined> = Either<T, U>
  
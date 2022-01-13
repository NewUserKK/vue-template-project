import { Either, leftOf, rightOf } from "@/common/Either";

type Result<T> = Either<Error, T>;

export function unwrapResults<T>(resultList: Result<T>[]): Result<T[]> {
  const maybeLeftResult = resultList.find(result => result.isLeft())

  if (maybeLeftResult) {
    return leftOf(
      maybeLeftResult.matcher<Error>().selfOnLeft().match()
    );
  }

  return rightOf(
    resultList.map(result =>
      result.asRight().value
    )
  )
}

export default Result;

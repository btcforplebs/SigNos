
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Request
 * 
 */
export type Request = $Result.DefaultSelection<Prisma.$RequestPayload>
/**
 * Model KeyUser
 * 
 */
export type KeyUser = $Result.DefaultSelection<Prisma.$KeyUserPayload>
/**
 * Model Key
 * 
 */
export type Key = $Result.DefaultSelection<Prisma.$KeyPayload>
/**
 * Model SigningCondition
 * 
 */
export type SigningCondition = $Result.DefaultSelection<Prisma.$SigningConditionPayload>
/**
 * Model Log
 * 
 */
export type Log = $Result.DefaultSelection<Prisma.$LogPayload>
/**
 * Model Policy
 * 
 */
export type Policy = $Result.DefaultSelection<Prisma.$PolicyPayload>
/**
 * Model PolicyRule
 * 
 */
export type PolicyRule = $Result.DefaultSelection<Prisma.$PolicyRulePayload>
/**
 * Model Token
 * 
 */
export type Token = $Result.DefaultSelection<Prisma.$TokenPayload>
/**
 * Model ConnectionToken
 * 
 */
export type ConnectionToken = $Result.DefaultSelection<Prisma.$ConnectionTokenPayload>
/**
 * Model AdminLog
 * 
 */
export type AdminLog = $Result.DefaultSelection<Prisma.$AdminLogPayload>
/**
 * Model Setting
 * 
 */
export type Setting = $Result.DefaultSelection<Prisma.$SettingPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Requests
 * const requests = await prisma.request.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Requests
   * const requests = await prisma.request.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.request`: Exposes CRUD operations for the **Request** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Requests
    * const requests = await prisma.request.findMany()
    * ```
    */
  get request(): Prisma.RequestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.keyUser`: Exposes CRUD operations for the **KeyUser** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more KeyUsers
    * const keyUsers = await prisma.keyUser.findMany()
    * ```
    */
  get keyUser(): Prisma.KeyUserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.key`: Exposes CRUD operations for the **Key** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Keys
    * const keys = await prisma.key.findMany()
    * ```
    */
  get key(): Prisma.KeyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.signingCondition`: Exposes CRUD operations for the **SigningCondition** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SigningConditions
    * const signingConditions = await prisma.signingCondition.findMany()
    * ```
    */
  get signingCondition(): Prisma.SigningConditionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.log`: Exposes CRUD operations for the **Log** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Logs
    * const logs = await prisma.log.findMany()
    * ```
    */
  get log(): Prisma.LogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.policy`: Exposes CRUD operations for the **Policy** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Policies
    * const policies = await prisma.policy.findMany()
    * ```
    */
  get policy(): Prisma.PolicyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.policyRule`: Exposes CRUD operations for the **PolicyRule** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PolicyRules
    * const policyRules = await prisma.policyRule.findMany()
    * ```
    */
  get policyRule(): Prisma.PolicyRuleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.token`: Exposes CRUD operations for the **Token** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tokens
    * const tokens = await prisma.token.findMany()
    * ```
    */
  get token(): Prisma.TokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.connectionToken`: Exposes CRUD operations for the **ConnectionToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ConnectionTokens
    * const connectionTokens = await prisma.connectionToken.findMany()
    * ```
    */
  get connectionToken(): Prisma.ConnectionTokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.adminLog`: Exposes CRUD operations for the **AdminLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AdminLogs
    * const adminLogs = await prisma.adminLog.findMany()
    * ```
    */
  get adminLog(): Prisma.AdminLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.setting`: Exposes CRUD operations for the **Setting** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Settings
    * const settings = await prisma.setting.findMany()
    * ```
    */
  get setting(): Prisma.SettingDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.3.0
   * Query Engine version: 9d6ad21cbbceab97458517b147a6a09ff43aa735
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Request: 'Request',
    KeyUser: 'KeyUser',
    Key: 'Key',
    SigningCondition: 'SigningCondition',
    Log: 'Log',
    Policy: 'Policy',
    PolicyRule: 'PolicyRule',
    Token: 'Token',
    ConnectionToken: 'ConnectionToken',
    AdminLog: 'AdminLog',
    Setting: 'Setting'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "request" | "keyUser" | "key" | "signingCondition" | "log" | "policy" | "policyRule" | "token" | "connectionToken" | "adminLog" | "setting"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Request: {
        payload: Prisma.$RequestPayload<ExtArgs>
        fields: Prisma.RequestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RequestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RequestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestPayload>
          }
          findFirst: {
            args: Prisma.RequestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RequestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestPayload>
          }
          findMany: {
            args: Prisma.RequestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestPayload>[]
          }
          create: {
            args: Prisma.RequestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestPayload>
          }
          createMany: {
            args: Prisma.RequestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RequestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestPayload>[]
          }
          delete: {
            args: Prisma.RequestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestPayload>
          }
          update: {
            args: Prisma.RequestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestPayload>
          }
          deleteMany: {
            args: Prisma.RequestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RequestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RequestUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestPayload>[]
          }
          upsert: {
            args: Prisma.RequestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestPayload>
          }
          aggregate: {
            args: Prisma.RequestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRequest>
          }
          groupBy: {
            args: Prisma.RequestGroupByArgs<ExtArgs>
            result: $Utils.Optional<RequestGroupByOutputType>[]
          }
          count: {
            args: Prisma.RequestCountArgs<ExtArgs>
            result: $Utils.Optional<RequestCountAggregateOutputType> | number
          }
        }
      }
      KeyUser: {
        payload: Prisma.$KeyUserPayload<ExtArgs>
        fields: Prisma.KeyUserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.KeyUserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeyUserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.KeyUserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeyUserPayload>
          }
          findFirst: {
            args: Prisma.KeyUserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeyUserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.KeyUserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeyUserPayload>
          }
          findMany: {
            args: Prisma.KeyUserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeyUserPayload>[]
          }
          create: {
            args: Prisma.KeyUserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeyUserPayload>
          }
          createMany: {
            args: Prisma.KeyUserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.KeyUserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeyUserPayload>[]
          }
          delete: {
            args: Prisma.KeyUserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeyUserPayload>
          }
          update: {
            args: Prisma.KeyUserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeyUserPayload>
          }
          deleteMany: {
            args: Prisma.KeyUserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.KeyUserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.KeyUserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeyUserPayload>[]
          }
          upsert: {
            args: Prisma.KeyUserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeyUserPayload>
          }
          aggregate: {
            args: Prisma.KeyUserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateKeyUser>
          }
          groupBy: {
            args: Prisma.KeyUserGroupByArgs<ExtArgs>
            result: $Utils.Optional<KeyUserGroupByOutputType>[]
          }
          count: {
            args: Prisma.KeyUserCountArgs<ExtArgs>
            result: $Utils.Optional<KeyUserCountAggregateOutputType> | number
          }
        }
      }
      Key: {
        payload: Prisma.$KeyPayload<ExtArgs>
        fields: Prisma.KeyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.KeyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.KeyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeyPayload>
          }
          findFirst: {
            args: Prisma.KeyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.KeyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeyPayload>
          }
          findMany: {
            args: Prisma.KeyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeyPayload>[]
          }
          create: {
            args: Prisma.KeyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeyPayload>
          }
          createMany: {
            args: Prisma.KeyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.KeyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeyPayload>[]
          }
          delete: {
            args: Prisma.KeyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeyPayload>
          }
          update: {
            args: Prisma.KeyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeyPayload>
          }
          deleteMany: {
            args: Prisma.KeyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.KeyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.KeyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeyPayload>[]
          }
          upsert: {
            args: Prisma.KeyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeyPayload>
          }
          aggregate: {
            args: Prisma.KeyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateKey>
          }
          groupBy: {
            args: Prisma.KeyGroupByArgs<ExtArgs>
            result: $Utils.Optional<KeyGroupByOutputType>[]
          }
          count: {
            args: Prisma.KeyCountArgs<ExtArgs>
            result: $Utils.Optional<KeyCountAggregateOutputType> | number
          }
        }
      }
      SigningCondition: {
        payload: Prisma.$SigningConditionPayload<ExtArgs>
        fields: Prisma.SigningConditionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SigningConditionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SigningConditionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SigningConditionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SigningConditionPayload>
          }
          findFirst: {
            args: Prisma.SigningConditionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SigningConditionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SigningConditionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SigningConditionPayload>
          }
          findMany: {
            args: Prisma.SigningConditionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SigningConditionPayload>[]
          }
          create: {
            args: Prisma.SigningConditionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SigningConditionPayload>
          }
          createMany: {
            args: Prisma.SigningConditionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SigningConditionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SigningConditionPayload>[]
          }
          delete: {
            args: Prisma.SigningConditionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SigningConditionPayload>
          }
          update: {
            args: Prisma.SigningConditionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SigningConditionPayload>
          }
          deleteMany: {
            args: Prisma.SigningConditionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SigningConditionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SigningConditionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SigningConditionPayload>[]
          }
          upsert: {
            args: Prisma.SigningConditionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SigningConditionPayload>
          }
          aggregate: {
            args: Prisma.SigningConditionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSigningCondition>
          }
          groupBy: {
            args: Prisma.SigningConditionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SigningConditionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SigningConditionCountArgs<ExtArgs>
            result: $Utils.Optional<SigningConditionCountAggregateOutputType> | number
          }
        }
      }
      Log: {
        payload: Prisma.$LogPayload<ExtArgs>
        fields: Prisma.LogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPayload>
          }
          findFirst: {
            args: Prisma.LogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPayload>
          }
          findMany: {
            args: Prisma.LogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPayload>[]
          }
          create: {
            args: Prisma.LogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPayload>
          }
          createMany: {
            args: Prisma.LogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPayload>[]
          }
          delete: {
            args: Prisma.LogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPayload>
          }
          update: {
            args: Prisma.LogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPayload>
          }
          deleteMany: {
            args: Prisma.LogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPayload>[]
          }
          upsert: {
            args: Prisma.LogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPayload>
          }
          aggregate: {
            args: Prisma.LogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLog>
          }
          groupBy: {
            args: Prisma.LogGroupByArgs<ExtArgs>
            result: $Utils.Optional<LogGroupByOutputType>[]
          }
          count: {
            args: Prisma.LogCountArgs<ExtArgs>
            result: $Utils.Optional<LogCountAggregateOutputType> | number
          }
        }
      }
      Policy: {
        payload: Prisma.$PolicyPayload<ExtArgs>
        fields: Prisma.PolicyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PolicyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PolicyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PolicyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PolicyPayload>
          }
          findFirst: {
            args: Prisma.PolicyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PolicyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PolicyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PolicyPayload>
          }
          findMany: {
            args: Prisma.PolicyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PolicyPayload>[]
          }
          create: {
            args: Prisma.PolicyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PolicyPayload>
          }
          createMany: {
            args: Prisma.PolicyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PolicyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PolicyPayload>[]
          }
          delete: {
            args: Prisma.PolicyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PolicyPayload>
          }
          update: {
            args: Prisma.PolicyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PolicyPayload>
          }
          deleteMany: {
            args: Prisma.PolicyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PolicyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PolicyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PolicyPayload>[]
          }
          upsert: {
            args: Prisma.PolicyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PolicyPayload>
          }
          aggregate: {
            args: Prisma.PolicyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePolicy>
          }
          groupBy: {
            args: Prisma.PolicyGroupByArgs<ExtArgs>
            result: $Utils.Optional<PolicyGroupByOutputType>[]
          }
          count: {
            args: Prisma.PolicyCountArgs<ExtArgs>
            result: $Utils.Optional<PolicyCountAggregateOutputType> | number
          }
        }
      }
      PolicyRule: {
        payload: Prisma.$PolicyRulePayload<ExtArgs>
        fields: Prisma.PolicyRuleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PolicyRuleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PolicyRulePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PolicyRuleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PolicyRulePayload>
          }
          findFirst: {
            args: Prisma.PolicyRuleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PolicyRulePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PolicyRuleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PolicyRulePayload>
          }
          findMany: {
            args: Prisma.PolicyRuleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PolicyRulePayload>[]
          }
          create: {
            args: Prisma.PolicyRuleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PolicyRulePayload>
          }
          createMany: {
            args: Prisma.PolicyRuleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PolicyRuleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PolicyRulePayload>[]
          }
          delete: {
            args: Prisma.PolicyRuleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PolicyRulePayload>
          }
          update: {
            args: Prisma.PolicyRuleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PolicyRulePayload>
          }
          deleteMany: {
            args: Prisma.PolicyRuleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PolicyRuleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PolicyRuleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PolicyRulePayload>[]
          }
          upsert: {
            args: Prisma.PolicyRuleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PolicyRulePayload>
          }
          aggregate: {
            args: Prisma.PolicyRuleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePolicyRule>
          }
          groupBy: {
            args: Prisma.PolicyRuleGroupByArgs<ExtArgs>
            result: $Utils.Optional<PolicyRuleGroupByOutputType>[]
          }
          count: {
            args: Prisma.PolicyRuleCountArgs<ExtArgs>
            result: $Utils.Optional<PolicyRuleCountAggregateOutputType> | number
          }
        }
      }
      Token: {
        payload: Prisma.$TokenPayload<ExtArgs>
        fields: Prisma.TokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          findFirst: {
            args: Prisma.TokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          findMany: {
            args: Prisma.TokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>[]
          }
          create: {
            args: Prisma.TokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          createMany: {
            args: Prisma.TokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>[]
          }
          delete: {
            args: Prisma.TokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          update: {
            args: Prisma.TokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          deleteMany: {
            args: Prisma.TokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>[]
          }
          upsert: {
            args: Prisma.TokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          aggregate: {
            args: Prisma.TokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateToken>
          }
          groupBy: {
            args: Prisma.TokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<TokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.TokenCountArgs<ExtArgs>
            result: $Utils.Optional<TokenCountAggregateOutputType> | number
          }
        }
      }
      ConnectionToken: {
        payload: Prisma.$ConnectionTokenPayload<ExtArgs>
        fields: Prisma.ConnectionTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ConnectionTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConnectionTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ConnectionTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConnectionTokenPayload>
          }
          findFirst: {
            args: Prisma.ConnectionTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConnectionTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ConnectionTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConnectionTokenPayload>
          }
          findMany: {
            args: Prisma.ConnectionTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConnectionTokenPayload>[]
          }
          create: {
            args: Prisma.ConnectionTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConnectionTokenPayload>
          }
          createMany: {
            args: Prisma.ConnectionTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ConnectionTokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConnectionTokenPayload>[]
          }
          delete: {
            args: Prisma.ConnectionTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConnectionTokenPayload>
          }
          update: {
            args: Prisma.ConnectionTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConnectionTokenPayload>
          }
          deleteMany: {
            args: Prisma.ConnectionTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ConnectionTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ConnectionTokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConnectionTokenPayload>[]
          }
          upsert: {
            args: Prisma.ConnectionTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConnectionTokenPayload>
          }
          aggregate: {
            args: Prisma.ConnectionTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateConnectionToken>
          }
          groupBy: {
            args: Prisma.ConnectionTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<ConnectionTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.ConnectionTokenCountArgs<ExtArgs>
            result: $Utils.Optional<ConnectionTokenCountAggregateOutputType> | number
          }
        }
      }
      AdminLog: {
        payload: Prisma.$AdminLogPayload<ExtArgs>
        fields: Prisma.AdminLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdminLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdminLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminLogPayload>
          }
          findFirst: {
            args: Prisma.AdminLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdminLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminLogPayload>
          }
          findMany: {
            args: Prisma.AdminLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminLogPayload>[]
          }
          create: {
            args: Prisma.AdminLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminLogPayload>
          }
          createMany: {
            args: Prisma.AdminLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AdminLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminLogPayload>[]
          }
          delete: {
            args: Prisma.AdminLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminLogPayload>
          }
          update: {
            args: Prisma.AdminLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminLogPayload>
          }
          deleteMany: {
            args: Prisma.AdminLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdminLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AdminLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminLogPayload>[]
          }
          upsert: {
            args: Prisma.AdminLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminLogPayload>
          }
          aggregate: {
            args: Prisma.AdminLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdminLog>
          }
          groupBy: {
            args: Prisma.AdminLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdminLogCountArgs<ExtArgs>
            result: $Utils.Optional<AdminLogCountAggregateOutputType> | number
          }
        }
      }
      Setting: {
        payload: Prisma.$SettingPayload<ExtArgs>
        fields: Prisma.SettingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SettingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SettingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload>
          }
          findFirst: {
            args: Prisma.SettingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SettingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload>
          }
          findMany: {
            args: Prisma.SettingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload>[]
          }
          create: {
            args: Prisma.SettingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload>
          }
          createMany: {
            args: Prisma.SettingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SettingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload>[]
          }
          delete: {
            args: Prisma.SettingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload>
          }
          update: {
            args: Prisma.SettingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload>
          }
          deleteMany: {
            args: Prisma.SettingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SettingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SettingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload>[]
          }
          upsert: {
            args: Prisma.SettingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload>
          }
          aggregate: {
            args: Prisma.SettingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSetting>
          }
          groupBy: {
            args: Prisma.SettingGroupByArgs<ExtArgs>
            result: $Utils.Optional<SettingGroupByOutputType>[]
          }
          count: {
            args: Prisma.SettingCountArgs<ExtArgs>
            result: $Utils.Optional<SettingCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    request?: RequestOmit
    keyUser?: KeyUserOmit
    key?: KeyOmit
    signingCondition?: SigningConditionOmit
    log?: LogOmit
    policy?: PolicyOmit
    policyRule?: PolicyRuleOmit
    token?: TokenOmit
    connectionToken?: ConnectionTokenOmit
    adminLog?: AdminLogOmit
    setting?: SettingOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type KeyUserCountOutputType
   */

  export type KeyUserCountOutputType = {
    logs: number
    signingConditions: number
    Token: number
    requests: number
  }

  export type KeyUserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    logs?: boolean | KeyUserCountOutputTypeCountLogsArgs
    signingConditions?: boolean | KeyUserCountOutputTypeCountSigningConditionsArgs
    Token?: boolean | KeyUserCountOutputTypeCountTokenArgs
    requests?: boolean | KeyUserCountOutputTypeCountRequestsArgs
  }

  // Custom InputTypes
  /**
   * KeyUserCountOutputType without action
   */
  export type KeyUserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KeyUserCountOutputType
     */
    select?: KeyUserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * KeyUserCountOutputType without action
   */
  export type KeyUserCountOutputTypeCountLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LogWhereInput
  }

  /**
   * KeyUserCountOutputType without action
   */
  export type KeyUserCountOutputTypeCountSigningConditionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SigningConditionWhereInput
  }

  /**
   * KeyUserCountOutputType without action
   */
  export type KeyUserCountOutputTypeCountTokenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TokenWhereInput
  }

  /**
   * KeyUserCountOutputType without action
   */
  export type KeyUserCountOutputTypeCountRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RequestWhereInput
  }


  /**
   * Count Type PolicyCountOutputType
   */

  export type PolicyCountOutputType = {
    rules: number
    Token: number
  }

  export type PolicyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rules?: boolean | PolicyCountOutputTypeCountRulesArgs
    Token?: boolean | PolicyCountOutputTypeCountTokenArgs
  }

  // Custom InputTypes
  /**
   * PolicyCountOutputType without action
   */
  export type PolicyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PolicyCountOutputType
     */
    select?: PolicyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PolicyCountOutputType without action
   */
  export type PolicyCountOutputTypeCountRulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PolicyRuleWhereInput
  }

  /**
   * PolicyCountOutputType without action
   */
  export type PolicyCountOutputTypeCountTokenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TokenWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Request
   */

  export type AggregateRequest = {
    _count: RequestCountAggregateOutputType | null
    _avg: RequestAvgAggregateOutputType | null
    _sum: RequestSumAggregateOutputType | null
    _min: RequestMinAggregateOutputType | null
    _max: RequestMaxAggregateOutputType | null
  }

  export type RequestAvgAggregateOutputType = {
    keyUserId: number | null
  }

  export type RequestSumAggregateOutputType = {
    keyUserId: number | null
  }

  export type RequestMinAggregateOutputType = {
    id: string | null
    keyName: string | null
    createdAt: Date | null
    processedAt: Date | null
    requestId: string | null
    remotePubkey: string | null
    method: string | null
    params: string | null
    allowed: boolean | null
    autoApproved: boolean | null
    approvalType: string | null
    keyUserId: number | null
  }

  export type RequestMaxAggregateOutputType = {
    id: string | null
    keyName: string | null
    createdAt: Date | null
    processedAt: Date | null
    requestId: string | null
    remotePubkey: string | null
    method: string | null
    params: string | null
    allowed: boolean | null
    autoApproved: boolean | null
    approvalType: string | null
    keyUserId: number | null
  }

  export type RequestCountAggregateOutputType = {
    id: number
    keyName: number
    createdAt: number
    processedAt: number
    requestId: number
    remotePubkey: number
    method: number
    params: number
    allowed: number
    autoApproved: number
    approvalType: number
    keyUserId: number
    _all: number
  }


  export type RequestAvgAggregateInputType = {
    keyUserId?: true
  }

  export type RequestSumAggregateInputType = {
    keyUserId?: true
  }

  export type RequestMinAggregateInputType = {
    id?: true
    keyName?: true
    createdAt?: true
    processedAt?: true
    requestId?: true
    remotePubkey?: true
    method?: true
    params?: true
    allowed?: true
    autoApproved?: true
    approvalType?: true
    keyUserId?: true
  }

  export type RequestMaxAggregateInputType = {
    id?: true
    keyName?: true
    createdAt?: true
    processedAt?: true
    requestId?: true
    remotePubkey?: true
    method?: true
    params?: true
    allowed?: true
    autoApproved?: true
    approvalType?: true
    keyUserId?: true
  }

  export type RequestCountAggregateInputType = {
    id?: true
    keyName?: true
    createdAt?: true
    processedAt?: true
    requestId?: true
    remotePubkey?: true
    method?: true
    params?: true
    allowed?: true
    autoApproved?: true
    approvalType?: true
    keyUserId?: true
    _all?: true
  }

  export type RequestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Request to aggregate.
     */
    where?: RequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Requests to fetch.
     */
    orderBy?: RequestOrderByWithRelationInput | RequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Requests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Requests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Requests
    **/
    _count?: true | RequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RequestAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RequestSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RequestMaxAggregateInputType
  }

  export type GetRequestAggregateType<T extends RequestAggregateArgs> = {
        [P in keyof T & keyof AggregateRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRequest[P]>
      : GetScalarType<T[P], AggregateRequest[P]>
  }




  export type RequestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RequestWhereInput
    orderBy?: RequestOrderByWithAggregationInput | RequestOrderByWithAggregationInput[]
    by: RequestScalarFieldEnum[] | RequestScalarFieldEnum
    having?: RequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RequestCountAggregateInputType | true
    _avg?: RequestAvgAggregateInputType
    _sum?: RequestSumAggregateInputType
    _min?: RequestMinAggregateInputType
    _max?: RequestMaxAggregateInputType
  }

  export type RequestGroupByOutputType = {
    id: string
    keyName: string | null
    createdAt: Date
    processedAt: Date | null
    requestId: string
    remotePubkey: string
    method: string
    params: string | null
    allowed: boolean | null
    autoApproved: boolean
    approvalType: string | null
    keyUserId: number | null
    _count: RequestCountAggregateOutputType | null
    _avg: RequestAvgAggregateOutputType | null
    _sum: RequestSumAggregateOutputType | null
    _min: RequestMinAggregateOutputType | null
    _max: RequestMaxAggregateOutputType | null
  }

  type GetRequestGroupByPayload<T extends RequestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RequestGroupByOutputType[P]>
            : GetScalarType<T[P], RequestGroupByOutputType[P]>
        }
      >
    >


  export type RequestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    keyName?: boolean
    createdAt?: boolean
    processedAt?: boolean
    requestId?: boolean
    remotePubkey?: boolean
    method?: boolean
    params?: boolean
    allowed?: boolean
    autoApproved?: boolean
    approvalType?: boolean
    keyUserId?: boolean
    KeyUser?: boolean | Request$KeyUserArgs<ExtArgs>
  }, ExtArgs["result"]["request"]>

  export type RequestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    keyName?: boolean
    createdAt?: boolean
    processedAt?: boolean
    requestId?: boolean
    remotePubkey?: boolean
    method?: boolean
    params?: boolean
    allowed?: boolean
    autoApproved?: boolean
    approvalType?: boolean
    keyUserId?: boolean
    KeyUser?: boolean | Request$KeyUserArgs<ExtArgs>
  }, ExtArgs["result"]["request"]>

  export type RequestSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    keyName?: boolean
    createdAt?: boolean
    processedAt?: boolean
    requestId?: boolean
    remotePubkey?: boolean
    method?: boolean
    params?: boolean
    allowed?: boolean
    autoApproved?: boolean
    approvalType?: boolean
    keyUserId?: boolean
    KeyUser?: boolean | Request$KeyUserArgs<ExtArgs>
  }, ExtArgs["result"]["request"]>

  export type RequestSelectScalar = {
    id?: boolean
    keyName?: boolean
    createdAt?: boolean
    processedAt?: boolean
    requestId?: boolean
    remotePubkey?: boolean
    method?: boolean
    params?: boolean
    allowed?: boolean
    autoApproved?: boolean
    approvalType?: boolean
    keyUserId?: boolean
  }

  export type RequestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "keyName" | "createdAt" | "processedAt" | "requestId" | "remotePubkey" | "method" | "params" | "allowed" | "autoApproved" | "approvalType" | "keyUserId", ExtArgs["result"]["request"]>
  export type RequestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    KeyUser?: boolean | Request$KeyUserArgs<ExtArgs>
  }
  export type RequestIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    KeyUser?: boolean | Request$KeyUserArgs<ExtArgs>
  }
  export type RequestIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    KeyUser?: boolean | Request$KeyUserArgs<ExtArgs>
  }

  export type $RequestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Request"
    objects: {
      KeyUser: Prisma.$KeyUserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      keyName: string | null
      createdAt: Date
      processedAt: Date | null
      requestId: string
      remotePubkey: string
      method: string
      params: string | null
      allowed: boolean | null
      autoApproved: boolean
      approvalType: string | null
      keyUserId: number | null
    }, ExtArgs["result"]["request"]>
    composites: {}
  }

  type RequestGetPayload<S extends boolean | null | undefined | RequestDefaultArgs> = $Result.GetResult<Prisma.$RequestPayload, S>

  type RequestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RequestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RequestCountAggregateInputType | true
    }

  export interface RequestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Request'], meta: { name: 'Request' } }
    /**
     * Find zero or one Request that matches the filter.
     * @param {RequestFindUniqueArgs} args - Arguments to find a Request
     * @example
     * // Get one Request
     * const request = await prisma.request.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RequestFindUniqueArgs>(args: SelectSubset<T, RequestFindUniqueArgs<ExtArgs>>): Prisma__RequestClient<$Result.GetResult<Prisma.$RequestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Request that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RequestFindUniqueOrThrowArgs} args - Arguments to find a Request
     * @example
     * // Get one Request
     * const request = await prisma.request.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RequestFindUniqueOrThrowArgs>(args: SelectSubset<T, RequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RequestClient<$Result.GetResult<Prisma.$RequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Request that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestFindFirstArgs} args - Arguments to find a Request
     * @example
     * // Get one Request
     * const request = await prisma.request.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RequestFindFirstArgs>(args?: SelectSubset<T, RequestFindFirstArgs<ExtArgs>>): Prisma__RequestClient<$Result.GetResult<Prisma.$RequestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Request that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestFindFirstOrThrowArgs} args - Arguments to find a Request
     * @example
     * // Get one Request
     * const request = await prisma.request.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RequestFindFirstOrThrowArgs>(args?: SelectSubset<T, RequestFindFirstOrThrowArgs<ExtArgs>>): Prisma__RequestClient<$Result.GetResult<Prisma.$RequestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Requests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Requests
     * const requests = await prisma.request.findMany()
     * 
     * // Get first 10 Requests
     * const requests = await prisma.request.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const requestWithIdOnly = await prisma.request.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RequestFindManyArgs>(args?: SelectSubset<T, RequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Request.
     * @param {RequestCreateArgs} args - Arguments to create a Request.
     * @example
     * // Create one Request
     * const Request = await prisma.request.create({
     *   data: {
     *     // ... data to create a Request
     *   }
     * })
     * 
     */
    create<T extends RequestCreateArgs>(args: SelectSubset<T, RequestCreateArgs<ExtArgs>>): Prisma__RequestClient<$Result.GetResult<Prisma.$RequestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Requests.
     * @param {RequestCreateManyArgs} args - Arguments to create many Requests.
     * @example
     * // Create many Requests
     * const request = await prisma.request.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RequestCreateManyArgs>(args?: SelectSubset<T, RequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Requests and returns the data saved in the database.
     * @param {RequestCreateManyAndReturnArgs} args - Arguments to create many Requests.
     * @example
     * // Create many Requests
     * const request = await prisma.request.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Requests and only return the `id`
     * const requestWithIdOnly = await prisma.request.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RequestCreateManyAndReturnArgs>(args?: SelectSubset<T, RequestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RequestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Request.
     * @param {RequestDeleteArgs} args - Arguments to delete one Request.
     * @example
     * // Delete one Request
     * const Request = await prisma.request.delete({
     *   where: {
     *     // ... filter to delete one Request
     *   }
     * })
     * 
     */
    delete<T extends RequestDeleteArgs>(args: SelectSubset<T, RequestDeleteArgs<ExtArgs>>): Prisma__RequestClient<$Result.GetResult<Prisma.$RequestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Request.
     * @param {RequestUpdateArgs} args - Arguments to update one Request.
     * @example
     * // Update one Request
     * const request = await prisma.request.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RequestUpdateArgs>(args: SelectSubset<T, RequestUpdateArgs<ExtArgs>>): Prisma__RequestClient<$Result.GetResult<Prisma.$RequestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Requests.
     * @param {RequestDeleteManyArgs} args - Arguments to filter Requests to delete.
     * @example
     * // Delete a few Requests
     * const { count } = await prisma.request.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RequestDeleteManyArgs>(args?: SelectSubset<T, RequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Requests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Requests
     * const request = await prisma.request.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RequestUpdateManyArgs>(args: SelectSubset<T, RequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Requests and returns the data updated in the database.
     * @param {RequestUpdateManyAndReturnArgs} args - Arguments to update many Requests.
     * @example
     * // Update many Requests
     * const request = await prisma.request.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Requests and only return the `id`
     * const requestWithIdOnly = await prisma.request.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RequestUpdateManyAndReturnArgs>(args: SelectSubset<T, RequestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RequestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Request.
     * @param {RequestUpsertArgs} args - Arguments to update or create a Request.
     * @example
     * // Update or create a Request
     * const request = await prisma.request.upsert({
     *   create: {
     *     // ... data to create a Request
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Request we want to update
     *   }
     * })
     */
    upsert<T extends RequestUpsertArgs>(args: SelectSubset<T, RequestUpsertArgs<ExtArgs>>): Prisma__RequestClient<$Result.GetResult<Prisma.$RequestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Requests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestCountArgs} args - Arguments to filter Requests to count.
     * @example
     * // Count the number of Requests
     * const count = await prisma.request.count({
     *   where: {
     *     // ... the filter for the Requests we want to count
     *   }
     * })
    **/
    count<T extends RequestCountArgs>(
      args?: Subset<T, RequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Request.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RequestAggregateArgs>(args: Subset<T, RequestAggregateArgs>): Prisma.PrismaPromise<GetRequestAggregateType<T>>

    /**
     * Group by Request.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RequestGroupByArgs['orderBy'] }
        : { orderBy?: RequestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Request model
   */
  readonly fields: RequestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Request.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RequestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    KeyUser<T extends Request$KeyUserArgs<ExtArgs> = {}>(args?: Subset<T, Request$KeyUserArgs<ExtArgs>>): Prisma__KeyUserClient<$Result.GetResult<Prisma.$KeyUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Request model
   */
  interface RequestFieldRefs {
    readonly id: FieldRef<"Request", 'String'>
    readonly keyName: FieldRef<"Request", 'String'>
    readonly createdAt: FieldRef<"Request", 'DateTime'>
    readonly processedAt: FieldRef<"Request", 'DateTime'>
    readonly requestId: FieldRef<"Request", 'String'>
    readonly remotePubkey: FieldRef<"Request", 'String'>
    readonly method: FieldRef<"Request", 'String'>
    readonly params: FieldRef<"Request", 'String'>
    readonly allowed: FieldRef<"Request", 'Boolean'>
    readonly autoApproved: FieldRef<"Request", 'Boolean'>
    readonly approvalType: FieldRef<"Request", 'String'>
    readonly keyUserId: FieldRef<"Request", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Request findUnique
   */
  export type RequestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Request
     */
    omit?: RequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestInclude<ExtArgs> | null
    /**
     * Filter, which Request to fetch.
     */
    where: RequestWhereUniqueInput
  }

  /**
   * Request findUniqueOrThrow
   */
  export type RequestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Request
     */
    omit?: RequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestInclude<ExtArgs> | null
    /**
     * Filter, which Request to fetch.
     */
    where: RequestWhereUniqueInput
  }

  /**
   * Request findFirst
   */
  export type RequestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Request
     */
    omit?: RequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestInclude<ExtArgs> | null
    /**
     * Filter, which Request to fetch.
     */
    where?: RequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Requests to fetch.
     */
    orderBy?: RequestOrderByWithRelationInput | RequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Requests.
     */
    cursor?: RequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Requests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Requests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Requests.
     */
    distinct?: RequestScalarFieldEnum | RequestScalarFieldEnum[]
  }

  /**
   * Request findFirstOrThrow
   */
  export type RequestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Request
     */
    omit?: RequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestInclude<ExtArgs> | null
    /**
     * Filter, which Request to fetch.
     */
    where?: RequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Requests to fetch.
     */
    orderBy?: RequestOrderByWithRelationInput | RequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Requests.
     */
    cursor?: RequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Requests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Requests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Requests.
     */
    distinct?: RequestScalarFieldEnum | RequestScalarFieldEnum[]
  }

  /**
   * Request findMany
   */
  export type RequestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Request
     */
    omit?: RequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestInclude<ExtArgs> | null
    /**
     * Filter, which Requests to fetch.
     */
    where?: RequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Requests to fetch.
     */
    orderBy?: RequestOrderByWithRelationInput | RequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Requests.
     */
    cursor?: RequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Requests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Requests.
     */
    skip?: number
    distinct?: RequestScalarFieldEnum | RequestScalarFieldEnum[]
  }

  /**
   * Request create
   */
  export type RequestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Request
     */
    omit?: RequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestInclude<ExtArgs> | null
    /**
     * The data needed to create a Request.
     */
    data: XOR<RequestCreateInput, RequestUncheckedCreateInput>
  }

  /**
   * Request createMany
   */
  export type RequestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Requests.
     */
    data: RequestCreateManyInput | RequestCreateManyInput[]
  }

  /**
   * Request createManyAndReturn
   */
  export type RequestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Request
     */
    omit?: RequestOmit<ExtArgs> | null
    /**
     * The data used to create many Requests.
     */
    data: RequestCreateManyInput | RequestCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Request update
   */
  export type RequestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Request
     */
    omit?: RequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestInclude<ExtArgs> | null
    /**
     * The data needed to update a Request.
     */
    data: XOR<RequestUpdateInput, RequestUncheckedUpdateInput>
    /**
     * Choose, which Request to update.
     */
    where: RequestWhereUniqueInput
  }

  /**
   * Request updateMany
   */
  export type RequestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Requests.
     */
    data: XOR<RequestUpdateManyMutationInput, RequestUncheckedUpdateManyInput>
    /**
     * Filter which Requests to update
     */
    where?: RequestWhereInput
    /**
     * Limit how many Requests to update.
     */
    limit?: number
  }

  /**
   * Request updateManyAndReturn
   */
  export type RequestUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Request
     */
    omit?: RequestOmit<ExtArgs> | null
    /**
     * The data used to update Requests.
     */
    data: XOR<RequestUpdateManyMutationInput, RequestUncheckedUpdateManyInput>
    /**
     * Filter which Requests to update
     */
    where?: RequestWhereInput
    /**
     * Limit how many Requests to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Request upsert
   */
  export type RequestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Request
     */
    omit?: RequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestInclude<ExtArgs> | null
    /**
     * The filter to search for the Request to update in case it exists.
     */
    where: RequestWhereUniqueInput
    /**
     * In case the Request found by the `where` argument doesn't exist, create a new Request with this data.
     */
    create: XOR<RequestCreateInput, RequestUncheckedCreateInput>
    /**
     * In case the Request was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RequestUpdateInput, RequestUncheckedUpdateInput>
  }

  /**
   * Request delete
   */
  export type RequestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Request
     */
    omit?: RequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestInclude<ExtArgs> | null
    /**
     * Filter which Request to delete.
     */
    where: RequestWhereUniqueInput
  }

  /**
   * Request deleteMany
   */
  export type RequestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Requests to delete
     */
    where?: RequestWhereInput
    /**
     * Limit how many Requests to delete.
     */
    limit?: number
  }

  /**
   * Request.KeyUser
   */
  export type Request$KeyUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KeyUser
     */
    select?: KeyUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KeyUser
     */
    omit?: KeyUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeyUserInclude<ExtArgs> | null
    where?: KeyUserWhereInput
  }

  /**
   * Request without action
   */
  export type RequestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Request
     */
    omit?: RequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestInclude<ExtArgs> | null
  }


  /**
   * Model KeyUser
   */

  export type AggregateKeyUser = {
    _count: KeyUserCountAggregateOutputType | null
    _avg: KeyUserAvgAggregateOutputType | null
    _sum: KeyUserSumAggregateOutputType | null
    _min: KeyUserMinAggregateOutputType | null
    _max: KeyUserMaxAggregateOutputType | null
  }

  export type KeyUserAvgAggregateOutputType = {
    id: number | null
  }

  export type KeyUserSumAggregateOutputType = {
    id: number | null
  }

  export type KeyUserMinAggregateOutputType = {
    id: number | null
    keyName: string | null
    userPubkey: string | null
    createdAt: Date | null
    updatedAt: Date | null
    revokedAt: Date | null
    suspendedAt: Date | null
    suspendUntil: Date | null
    lastUsedAt: Date | null
    description: string | null
    trustLevel: string | null
    nostrconnectRelays: string | null
  }

  export type KeyUserMaxAggregateOutputType = {
    id: number | null
    keyName: string | null
    userPubkey: string | null
    createdAt: Date | null
    updatedAt: Date | null
    revokedAt: Date | null
    suspendedAt: Date | null
    suspendUntil: Date | null
    lastUsedAt: Date | null
    description: string | null
    trustLevel: string | null
    nostrconnectRelays: string | null
  }

  export type KeyUserCountAggregateOutputType = {
    id: number
    keyName: number
    userPubkey: number
    createdAt: number
    updatedAt: number
    revokedAt: number
    suspendedAt: number
    suspendUntil: number
    lastUsedAt: number
    description: number
    trustLevel: number
    nostrconnectRelays: number
    _all: number
  }


  export type KeyUserAvgAggregateInputType = {
    id?: true
  }

  export type KeyUserSumAggregateInputType = {
    id?: true
  }

  export type KeyUserMinAggregateInputType = {
    id?: true
    keyName?: true
    userPubkey?: true
    createdAt?: true
    updatedAt?: true
    revokedAt?: true
    suspendedAt?: true
    suspendUntil?: true
    lastUsedAt?: true
    description?: true
    trustLevel?: true
    nostrconnectRelays?: true
  }

  export type KeyUserMaxAggregateInputType = {
    id?: true
    keyName?: true
    userPubkey?: true
    createdAt?: true
    updatedAt?: true
    revokedAt?: true
    suspendedAt?: true
    suspendUntil?: true
    lastUsedAt?: true
    description?: true
    trustLevel?: true
    nostrconnectRelays?: true
  }

  export type KeyUserCountAggregateInputType = {
    id?: true
    keyName?: true
    userPubkey?: true
    createdAt?: true
    updatedAt?: true
    revokedAt?: true
    suspendedAt?: true
    suspendUntil?: true
    lastUsedAt?: true
    description?: true
    trustLevel?: true
    nostrconnectRelays?: true
    _all?: true
  }

  export type KeyUserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which KeyUser to aggregate.
     */
    where?: KeyUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KeyUsers to fetch.
     */
    orderBy?: KeyUserOrderByWithRelationInput | KeyUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: KeyUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KeyUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KeyUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned KeyUsers
    **/
    _count?: true | KeyUserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: KeyUserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: KeyUserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: KeyUserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: KeyUserMaxAggregateInputType
  }

  export type GetKeyUserAggregateType<T extends KeyUserAggregateArgs> = {
        [P in keyof T & keyof AggregateKeyUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateKeyUser[P]>
      : GetScalarType<T[P], AggregateKeyUser[P]>
  }




  export type KeyUserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: KeyUserWhereInput
    orderBy?: KeyUserOrderByWithAggregationInput | KeyUserOrderByWithAggregationInput[]
    by: KeyUserScalarFieldEnum[] | KeyUserScalarFieldEnum
    having?: KeyUserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: KeyUserCountAggregateInputType | true
    _avg?: KeyUserAvgAggregateInputType
    _sum?: KeyUserSumAggregateInputType
    _min?: KeyUserMinAggregateInputType
    _max?: KeyUserMaxAggregateInputType
  }

  export type KeyUserGroupByOutputType = {
    id: number
    keyName: string
    userPubkey: string
    createdAt: Date
    updatedAt: Date
    revokedAt: Date | null
    suspendedAt: Date | null
    suspendUntil: Date | null
    lastUsedAt: Date | null
    description: string | null
    trustLevel: string
    nostrconnectRelays: string | null
    _count: KeyUserCountAggregateOutputType | null
    _avg: KeyUserAvgAggregateOutputType | null
    _sum: KeyUserSumAggregateOutputType | null
    _min: KeyUserMinAggregateOutputType | null
    _max: KeyUserMaxAggregateOutputType | null
  }

  type GetKeyUserGroupByPayload<T extends KeyUserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<KeyUserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof KeyUserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], KeyUserGroupByOutputType[P]>
            : GetScalarType<T[P], KeyUserGroupByOutputType[P]>
        }
      >
    >


  export type KeyUserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    keyName?: boolean
    userPubkey?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    revokedAt?: boolean
    suspendedAt?: boolean
    suspendUntil?: boolean
    lastUsedAt?: boolean
    description?: boolean
    trustLevel?: boolean
    nostrconnectRelays?: boolean
    logs?: boolean | KeyUser$logsArgs<ExtArgs>
    signingConditions?: boolean | KeyUser$signingConditionsArgs<ExtArgs>
    Token?: boolean | KeyUser$TokenArgs<ExtArgs>
    requests?: boolean | KeyUser$requestsArgs<ExtArgs>
    _count?: boolean | KeyUserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["keyUser"]>

  export type KeyUserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    keyName?: boolean
    userPubkey?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    revokedAt?: boolean
    suspendedAt?: boolean
    suspendUntil?: boolean
    lastUsedAt?: boolean
    description?: boolean
    trustLevel?: boolean
    nostrconnectRelays?: boolean
  }, ExtArgs["result"]["keyUser"]>

  export type KeyUserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    keyName?: boolean
    userPubkey?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    revokedAt?: boolean
    suspendedAt?: boolean
    suspendUntil?: boolean
    lastUsedAt?: boolean
    description?: boolean
    trustLevel?: boolean
    nostrconnectRelays?: boolean
  }, ExtArgs["result"]["keyUser"]>

  export type KeyUserSelectScalar = {
    id?: boolean
    keyName?: boolean
    userPubkey?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    revokedAt?: boolean
    suspendedAt?: boolean
    suspendUntil?: boolean
    lastUsedAt?: boolean
    description?: boolean
    trustLevel?: boolean
    nostrconnectRelays?: boolean
  }

  export type KeyUserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "keyName" | "userPubkey" | "createdAt" | "updatedAt" | "revokedAt" | "suspendedAt" | "suspendUntil" | "lastUsedAt" | "description" | "trustLevel" | "nostrconnectRelays", ExtArgs["result"]["keyUser"]>
  export type KeyUserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    logs?: boolean | KeyUser$logsArgs<ExtArgs>
    signingConditions?: boolean | KeyUser$signingConditionsArgs<ExtArgs>
    Token?: boolean | KeyUser$TokenArgs<ExtArgs>
    requests?: boolean | KeyUser$requestsArgs<ExtArgs>
    _count?: boolean | KeyUserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type KeyUserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type KeyUserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $KeyUserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "KeyUser"
    objects: {
      logs: Prisma.$LogPayload<ExtArgs>[]
      signingConditions: Prisma.$SigningConditionPayload<ExtArgs>[]
      Token: Prisma.$TokenPayload<ExtArgs>[]
      requests: Prisma.$RequestPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      keyName: string
      userPubkey: string
      createdAt: Date
      updatedAt: Date
      revokedAt: Date | null
      suspendedAt: Date | null
      suspendUntil: Date | null
      lastUsedAt: Date | null
      description: string | null
      trustLevel: string
      nostrconnectRelays: string | null
    }, ExtArgs["result"]["keyUser"]>
    composites: {}
  }

  type KeyUserGetPayload<S extends boolean | null | undefined | KeyUserDefaultArgs> = $Result.GetResult<Prisma.$KeyUserPayload, S>

  type KeyUserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<KeyUserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: KeyUserCountAggregateInputType | true
    }

  export interface KeyUserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['KeyUser'], meta: { name: 'KeyUser' } }
    /**
     * Find zero or one KeyUser that matches the filter.
     * @param {KeyUserFindUniqueArgs} args - Arguments to find a KeyUser
     * @example
     * // Get one KeyUser
     * const keyUser = await prisma.keyUser.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends KeyUserFindUniqueArgs>(args: SelectSubset<T, KeyUserFindUniqueArgs<ExtArgs>>): Prisma__KeyUserClient<$Result.GetResult<Prisma.$KeyUserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one KeyUser that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {KeyUserFindUniqueOrThrowArgs} args - Arguments to find a KeyUser
     * @example
     * // Get one KeyUser
     * const keyUser = await prisma.keyUser.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends KeyUserFindUniqueOrThrowArgs>(args: SelectSubset<T, KeyUserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__KeyUserClient<$Result.GetResult<Prisma.$KeyUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first KeyUser that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KeyUserFindFirstArgs} args - Arguments to find a KeyUser
     * @example
     * // Get one KeyUser
     * const keyUser = await prisma.keyUser.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends KeyUserFindFirstArgs>(args?: SelectSubset<T, KeyUserFindFirstArgs<ExtArgs>>): Prisma__KeyUserClient<$Result.GetResult<Prisma.$KeyUserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first KeyUser that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KeyUserFindFirstOrThrowArgs} args - Arguments to find a KeyUser
     * @example
     * // Get one KeyUser
     * const keyUser = await prisma.keyUser.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends KeyUserFindFirstOrThrowArgs>(args?: SelectSubset<T, KeyUserFindFirstOrThrowArgs<ExtArgs>>): Prisma__KeyUserClient<$Result.GetResult<Prisma.$KeyUserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more KeyUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KeyUserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all KeyUsers
     * const keyUsers = await prisma.keyUser.findMany()
     * 
     * // Get first 10 KeyUsers
     * const keyUsers = await prisma.keyUser.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const keyUserWithIdOnly = await prisma.keyUser.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends KeyUserFindManyArgs>(args?: SelectSubset<T, KeyUserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KeyUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a KeyUser.
     * @param {KeyUserCreateArgs} args - Arguments to create a KeyUser.
     * @example
     * // Create one KeyUser
     * const KeyUser = await prisma.keyUser.create({
     *   data: {
     *     // ... data to create a KeyUser
     *   }
     * })
     * 
     */
    create<T extends KeyUserCreateArgs>(args: SelectSubset<T, KeyUserCreateArgs<ExtArgs>>): Prisma__KeyUserClient<$Result.GetResult<Prisma.$KeyUserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many KeyUsers.
     * @param {KeyUserCreateManyArgs} args - Arguments to create many KeyUsers.
     * @example
     * // Create many KeyUsers
     * const keyUser = await prisma.keyUser.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends KeyUserCreateManyArgs>(args?: SelectSubset<T, KeyUserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many KeyUsers and returns the data saved in the database.
     * @param {KeyUserCreateManyAndReturnArgs} args - Arguments to create many KeyUsers.
     * @example
     * // Create many KeyUsers
     * const keyUser = await prisma.keyUser.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many KeyUsers and only return the `id`
     * const keyUserWithIdOnly = await prisma.keyUser.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends KeyUserCreateManyAndReturnArgs>(args?: SelectSubset<T, KeyUserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KeyUserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a KeyUser.
     * @param {KeyUserDeleteArgs} args - Arguments to delete one KeyUser.
     * @example
     * // Delete one KeyUser
     * const KeyUser = await prisma.keyUser.delete({
     *   where: {
     *     // ... filter to delete one KeyUser
     *   }
     * })
     * 
     */
    delete<T extends KeyUserDeleteArgs>(args: SelectSubset<T, KeyUserDeleteArgs<ExtArgs>>): Prisma__KeyUserClient<$Result.GetResult<Prisma.$KeyUserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one KeyUser.
     * @param {KeyUserUpdateArgs} args - Arguments to update one KeyUser.
     * @example
     * // Update one KeyUser
     * const keyUser = await prisma.keyUser.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends KeyUserUpdateArgs>(args: SelectSubset<T, KeyUserUpdateArgs<ExtArgs>>): Prisma__KeyUserClient<$Result.GetResult<Prisma.$KeyUserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more KeyUsers.
     * @param {KeyUserDeleteManyArgs} args - Arguments to filter KeyUsers to delete.
     * @example
     * // Delete a few KeyUsers
     * const { count } = await prisma.keyUser.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends KeyUserDeleteManyArgs>(args?: SelectSubset<T, KeyUserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more KeyUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KeyUserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many KeyUsers
     * const keyUser = await prisma.keyUser.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends KeyUserUpdateManyArgs>(args: SelectSubset<T, KeyUserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more KeyUsers and returns the data updated in the database.
     * @param {KeyUserUpdateManyAndReturnArgs} args - Arguments to update many KeyUsers.
     * @example
     * // Update many KeyUsers
     * const keyUser = await prisma.keyUser.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more KeyUsers and only return the `id`
     * const keyUserWithIdOnly = await prisma.keyUser.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends KeyUserUpdateManyAndReturnArgs>(args: SelectSubset<T, KeyUserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KeyUserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one KeyUser.
     * @param {KeyUserUpsertArgs} args - Arguments to update or create a KeyUser.
     * @example
     * // Update or create a KeyUser
     * const keyUser = await prisma.keyUser.upsert({
     *   create: {
     *     // ... data to create a KeyUser
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the KeyUser we want to update
     *   }
     * })
     */
    upsert<T extends KeyUserUpsertArgs>(args: SelectSubset<T, KeyUserUpsertArgs<ExtArgs>>): Prisma__KeyUserClient<$Result.GetResult<Prisma.$KeyUserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of KeyUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KeyUserCountArgs} args - Arguments to filter KeyUsers to count.
     * @example
     * // Count the number of KeyUsers
     * const count = await prisma.keyUser.count({
     *   where: {
     *     // ... the filter for the KeyUsers we want to count
     *   }
     * })
    **/
    count<T extends KeyUserCountArgs>(
      args?: Subset<T, KeyUserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], KeyUserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a KeyUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KeyUserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends KeyUserAggregateArgs>(args: Subset<T, KeyUserAggregateArgs>): Prisma.PrismaPromise<GetKeyUserAggregateType<T>>

    /**
     * Group by KeyUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KeyUserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends KeyUserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: KeyUserGroupByArgs['orderBy'] }
        : { orderBy?: KeyUserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, KeyUserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetKeyUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the KeyUser model
   */
  readonly fields: KeyUserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for KeyUser.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__KeyUserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    logs<T extends KeyUser$logsArgs<ExtArgs> = {}>(args?: Subset<T, KeyUser$logsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    signingConditions<T extends KeyUser$signingConditionsArgs<ExtArgs> = {}>(args?: Subset<T, KeyUser$signingConditionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SigningConditionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Token<T extends KeyUser$TokenArgs<ExtArgs> = {}>(args?: Subset<T, KeyUser$TokenArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    requests<T extends KeyUser$requestsArgs<ExtArgs> = {}>(args?: Subset<T, KeyUser$requestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the KeyUser model
   */
  interface KeyUserFieldRefs {
    readonly id: FieldRef<"KeyUser", 'Int'>
    readonly keyName: FieldRef<"KeyUser", 'String'>
    readonly userPubkey: FieldRef<"KeyUser", 'String'>
    readonly createdAt: FieldRef<"KeyUser", 'DateTime'>
    readonly updatedAt: FieldRef<"KeyUser", 'DateTime'>
    readonly revokedAt: FieldRef<"KeyUser", 'DateTime'>
    readonly suspendedAt: FieldRef<"KeyUser", 'DateTime'>
    readonly suspendUntil: FieldRef<"KeyUser", 'DateTime'>
    readonly lastUsedAt: FieldRef<"KeyUser", 'DateTime'>
    readonly description: FieldRef<"KeyUser", 'String'>
    readonly trustLevel: FieldRef<"KeyUser", 'String'>
    readonly nostrconnectRelays: FieldRef<"KeyUser", 'String'>
  }
    

  // Custom InputTypes
  /**
   * KeyUser findUnique
   */
  export type KeyUserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KeyUser
     */
    select?: KeyUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KeyUser
     */
    omit?: KeyUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeyUserInclude<ExtArgs> | null
    /**
     * Filter, which KeyUser to fetch.
     */
    where: KeyUserWhereUniqueInput
  }

  /**
   * KeyUser findUniqueOrThrow
   */
  export type KeyUserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KeyUser
     */
    select?: KeyUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KeyUser
     */
    omit?: KeyUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeyUserInclude<ExtArgs> | null
    /**
     * Filter, which KeyUser to fetch.
     */
    where: KeyUserWhereUniqueInput
  }

  /**
   * KeyUser findFirst
   */
  export type KeyUserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KeyUser
     */
    select?: KeyUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KeyUser
     */
    omit?: KeyUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeyUserInclude<ExtArgs> | null
    /**
     * Filter, which KeyUser to fetch.
     */
    where?: KeyUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KeyUsers to fetch.
     */
    orderBy?: KeyUserOrderByWithRelationInput | KeyUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for KeyUsers.
     */
    cursor?: KeyUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KeyUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KeyUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of KeyUsers.
     */
    distinct?: KeyUserScalarFieldEnum | KeyUserScalarFieldEnum[]
  }

  /**
   * KeyUser findFirstOrThrow
   */
  export type KeyUserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KeyUser
     */
    select?: KeyUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KeyUser
     */
    omit?: KeyUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeyUserInclude<ExtArgs> | null
    /**
     * Filter, which KeyUser to fetch.
     */
    where?: KeyUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KeyUsers to fetch.
     */
    orderBy?: KeyUserOrderByWithRelationInput | KeyUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for KeyUsers.
     */
    cursor?: KeyUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KeyUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KeyUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of KeyUsers.
     */
    distinct?: KeyUserScalarFieldEnum | KeyUserScalarFieldEnum[]
  }

  /**
   * KeyUser findMany
   */
  export type KeyUserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KeyUser
     */
    select?: KeyUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KeyUser
     */
    omit?: KeyUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeyUserInclude<ExtArgs> | null
    /**
     * Filter, which KeyUsers to fetch.
     */
    where?: KeyUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KeyUsers to fetch.
     */
    orderBy?: KeyUserOrderByWithRelationInput | KeyUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing KeyUsers.
     */
    cursor?: KeyUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KeyUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KeyUsers.
     */
    skip?: number
    distinct?: KeyUserScalarFieldEnum | KeyUserScalarFieldEnum[]
  }

  /**
   * KeyUser create
   */
  export type KeyUserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KeyUser
     */
    select?: KeyUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KeyUser
     */
    omit?: KeyUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeyUserInclude<ExtArgs> | null
    /**
     * The data needed to create a KeyUser.
     */
    data: XOR<KeyUserCreateInput, KeyUserUncheckedCreateInput>
  }

  /**
   * KeyUser createMany
   */
  export type KeyUserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many KeyUsers.
     */
    data: KeyUserCreateManyInput | KeyUserCreateManyInput[]
  }

  /**
   * KeyUser createManyAndReturn
   */
  export type KeyUserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KeyUser
     */
    select?: KeyUserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the KeyUser
     */
    omit?: KeyUserOmit<ExtArgs> | null
    /**
     * The data used to create many KeyUsers.
     */
    data: KeyUserCreateManyInput | KeyUserCreateManyInput[]
  }

  /**
   * KeyUser update
   */
  export type KeyUserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KeyUser
     */
    select?: KeyUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KeyUser
     */
    omit?: KeyUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeyUserInclude<ExtArgs> | null
    /**
     * The data needed to update a KeyUser.
     */
    data: XOR<KeyUserUpdateInput, KeyUserUncheckedUpdateInput>
    /**
     * Choose, which KeyUser to update.
     */
    where: KeyUserWhereUniqueInput
  }

  /**
   * KeyUser updateMany
   */
  export type KeyUserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update KeyUsers.
     */
    data: XOR<KeyUserUpdateManyMutationInput, KeyUserUncheckedUpdateManyInput>
    /**
     * Filter which KeyUsers to update
     */
    where?: KeyUserWhereInput
    /**
     * Limit how many KeyUsers to update.
     */
    limit?: number
  }

  /**
   * KeyUser updateManyAndReturn
   */
  export type KeyUserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KeyUser
     */
    select?: KeyUserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the KeyUser
     */
    omit?: KeyUserOmit<ExtArgs> | null
    /**
     * The data used to update KeyUsers.
     */
    data: XOR<KeyUserUpdateManyMutationInput, KeyUserUncheckedUpdateManyInput>
    /**
     * Filter which KeyUsers to update
     */
    where?: KeyUserWhereInput
    /**
     * Limit how many KeyUsers to update.
     */
    limit?: number
  }

  /**
   * KeyUser upsert
   */
  export type KeyUserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KeyUser
     */
    select?: KeyUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KeyUser
     */
    omit?: KeyUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeyUserInclude<ExtArgs> | null
    /**
     * The filter to search for the KeyUser to update in case it exists.
     */
    where: KeyUserWhereUniqueInput
    /**
     * In case the KeyUser found by the `where` argument doesn't exist, create a new KeyUser with this data.
     */
    create: XOR<KeyUserCreateInput, KeyUserUncheckedCreateInput>
    /**
     * In case the KeyUser was found with the provided `where` argument, update it with this data.
     */
    update: XOR<KeyUserUpdateInput, KeyUserUncheckedUpdateInput>
  }

  /**
   * KeyUser delete
   */
  export type KeyUserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KeyUser
     */
    select?: KeyUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KeyUser
     */
    omit?: KeyUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeyUserInclude<ExtArgs> | null
    /**
     * Filter which KeyUser to delete.
     */
    where: KeyUserWhereUniqueInput
  }

  /**
   * KeyUser deleteMany
   */
  export type KeyUserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which KeyUsers to delete
     */
    where?: KeyUserWhereInput
    /**
     * Limit how many KeyUsers to delete.
     */
    limit?: number
  }

  /**
   * KeyUser.logs
   */
  export type KeyUser$logsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogInclude<ExtArgs> | null
    where?: LogWhereInput
    orderBy?: LogOrderByWithRelationInput | LogOrderByWithRelationInput[]
    cursor?: LogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LogScalarFieldEnum | LogScalarFieldEnum[]
  }

  /**
   * KeyUser.signingConditions
   */
  export type KeyUser$signingConditionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SigningCondition
     */
    select?: SigningConditionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SigningCondition
     */
    omit?: SigningConditionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SigningConditionInclude<ExtArgs> | null
    where?: SigningConditionWhereInput
    orderBy?: SigningConditionOrderByWithRelationInput | SigningConditionOrderByWithRelationInput[]
    cursor?: SigningConditionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SigningConditionScalarFieldEnum | SigningConditionScalarFieldEnum[]
  }

  /**
   * KeyUser.Token
   */
  export type KeyUser$TokenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    where?: TokenWhereInput
    orderBy?: TokenOrderByWithRelationInput | TokenOrderByWithRelationInput[]
    cursor?: TokenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TokenScalarFieldEnum | TokenScalarFieldEnum[]
  }

  /**
   * KeyUser.requests
   */
  export type KeyUser$requestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Request
     */
    omit?: RequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestInclude<ExtArgs> | null
    where?: RequestWhereInput
    orderBy?: RequestOrderByWithRelationInput | RequestOrderByWithRelationInput[]
    cursor?: RequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RequestScalarFieldEnum | RequestScalarFieldEnum[]
  }

  /**
   * KeyUser without action
   */
  export type KeyUserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KeyUser
     */
    select?: KeyUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KeyUser
     */
    omit?: KeyUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeyUserInclude<ExtArgs> | null
  }


  /**
   * Model Key
   */

  export type AggregateKey = {
    _count: KeyCountAggregateOutputType | null
    _avg: KeyAvgAggregateOutputType | null
    _sum: KeySumAggregateOutputType | null
    _min: KeyMinAggregateOutputType | null
    _max: KeyMaxAggregateOutputType | null
  }

  export type KeyAvgAggregateOutputType = {
    id: number | null
  }

  export type KeySumAggregateOutputType = {
    id: number | null
  }

  export type KeyMinAggregateOutputType = {
    id: number | null
    keyName: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    pubkey: string | null
  }

  export type KeyMaxAggregateOutputType = {
    id: number | null
    keyName: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    pubkey: string | null
  }

  export type KeyCountAggregateOutputType = {
    id: number
    keyName: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    pubkey: number
    _all: number
  }


  export type KeyAvgAggregateInputType = {
    id?: true
  }

  export type KeySumAggregateInputType = {
    id?: true
  }

  export type KeyMinAggregateInputType = {
    id?: true
    keyName?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    pubkey?: true
  }

  export type KeyMaxAggregateInputType = {
    id?: true
    keyName?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    pubkey?: true
  }

  export type KeyCountAggregateInputType = {
    id?: true
    keyName?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    pubkey?: true
    _all?: true
  }

  export type KeyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Key to aggregate.
     */
    where?: KeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Keys to fetch.
     */
    orderBy?: KeyOrderByWithRelationInput | KeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: KeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Keys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Keys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Keys
    **/
    _count?: true | KeyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: KeyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: KeySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: KeyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: KeyMaxAggregateInputType
  }

  export type GetKeyAggregateType<T extends KeyAggregateArgs> = {
        [P in keyof T & keyof AggregateKey]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateKey[P]>
      : GetScalarType<T[P], AggregateKey[P]>
  }




  export type KeyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: KeyWhereInput
    orderBy?: KeyOrderByWithAggregationInput | KeyOrderByWithAggregationInput[]
    by: KeyScalarFieldEnum[] | KeyScalarFieldEnum
    having?: KeyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: KeyCountAggregateInputType | true
    _avg?: KeyAvgAggregateInputType
    _sum?: KeySumAggregateInputType
    _min?: KeyMinAggregateInputType
    _max?: KeyMaxAggregateInputType
  }

  export type KeyGroupByOutputType = {
    id: number
    keyName: string
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    pubkey: string
    _count: KeyCountAggregateOutputType | null
    _avg: KeyAvgAggregateOutputType | null
    _sum: KeySumAggregateOutputType | null
    _min: KeyMinAggregateOutputType | null
    _max: KeyMaxAggregateOutputType | null
  }

  type GetKeyGroupByPayload<T extends KeyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<KeyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof KeyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], KeyGroupByOutputType[P]>
            : GetScalarType<T[P], KeyGroupByOutputType[P]>
        }
      >
    >


  export type KeySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    keyName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    pubkey?: boolean
  }, ExtArgs["result"]["key"]>

  export type KeySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    keyName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    pubkey?: boolean
  }, ExtArgs["result"]["key"]>

  export type KeySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    keyName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    pubkey?: boolean
  }, ExtArgs["result"]["key"]>

  export type KeySelectScalar = {
    id?: boolean
    keyName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    pubkey?: boolean
  }

  export type KeyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "keyName" | "createdAt" | "updatedAt" | "deletedAt" | "pubkey", ExtArgs["result"]["key"]>

  export type $KeyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Key"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      keyName: string
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
      pubkey: string
    }, ExtArgs["result"]["key"]>
    composites: {}
  }

  type KeyGetPayload<S extends boolean | null | undefined | KeyDefaultArgs> = $Result.GetResult<Prisma.$KeyPayload, S>

  type KeyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<KeyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: KeyCountAggregateInputType | true
    }

  export interface KeyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Key'], meta: { name: 'Key' } }
    /**
     * Find zero or one Key that matches the filter.
     * @param {KeyFindUniqueArgs} args - Arguments to find a Key
     * @example
     * // Get one Key
     * const key = await prisma.key.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends KeyFindUniqueArgs>(args: SelectSubset<T, KeyFindUniqueArgs<ExtArgs>>): Prisma__KeyClient<$Result.GetResult<Prisma.$KeyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Key that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {KeyFindUniqueOrThrowArgs} args - Arguments to find a Key
     * @example
     * // Get one Key
     * const key = await prisma.key.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends KeyFindUniqueOrThrowArgs>(args: SelectSubset<T, KeyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__KeyClient<$Result.GetResult<Prisma.$KeyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Key that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KeyFindFirstArgs} args - Arguments to find a Key
     * @example
     * // Get one Key
     * const key = await prisma.key.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends KeyFindFirstArgs>(args?: SelectSubset<T, KeyFindFirstArgs<ExtArgs>>): Prisma__KeyClient<$Result.GetResult<Prisma.$KeyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Key that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KeyFindFirstOrThrowArgs} args - Arguments to find a Key
     * @example
     * // Get one Key
     * const key = await prisma.key.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends KeyFindFirstOrThrowArgs>(args?: SelectSubset<T, KeyFindFirstOrThrowArgs<ExtArgs>>): Prisma__KeyClient<$Result.GetResult<Prisma.$KeyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Keys that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KeyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Keys
     * const keys = await prisma.key.findMany()
     * 
     * // Get first 10 Keys
     * const keys = await prisma.key.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const keyWithIdOnly = await prisma.key.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends KeyFindManyArgs>(args?: SelectSubset<T, KeyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KeyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Key.
     * @param {KeyCreateArgs} args - Arguments to create a Key.
     * @example
     * // Create one Key
     * const Key = await prisma.key.create({
     *   data: {
     *     // ... data to create a Key
     *   }
     * })
     * 
     */
    create<T extends KeyCreateArgs>(args: SelectSubset<T, KeyCreateArgs<ExtArgs>>): Prisma__KeyClient<$Result.GetResult<Prisma.$KeyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Keys.
     * @param {KeyCreateManyArgs} args - Arguments to create many Keys.
     * @example
     * // Create many Keys
     * const key = await prisma.key.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends KeyCreateManyArgs>(args?: SelectSubset<T, KeyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Keys and returns the data saved in the database.
     * @param {KeyCreateManyAndReturnArgs} args - Arguments to create many Keys.
     * @example
     * // Create many Keys
     * const key = await prisma.key.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Keys and only return the `id`
     * const keyWithIdOnly = await prisma.key.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends KeyCreateManyAndReturnArgs>(args?: SelectSubset<T, KeyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KeyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Key.
     * @param {KeyDeleteArgs} args - Arguments to delete one Key.
     * @example
     * // Delete one Key
     * const Key = await prisma.key.delete({
     *   where: {
     *     // ... filter to delete one Key
     *   }
     * })
     * 
     */
    delete<T extends KeyDeleteArgs>(args: SelectSubset<T, KeyDeleteArgs<ExtArgs>>): Prisma__KeyClient<$Result.GetResult<Prisma.$KeyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Key.
     * @param {KeyUpdateArgs} args - Arguments to update one Key.
     * @example
     * // Update one Key
     * const key = await prisma.key.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends KeyUpdateArgs>(args: SelectSubset<T, KeyUpdateArgs<ExtArgs>>): Prisma__KeyClient<$Result.GetResult<Prisma.$KeyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Keys.
     * @param {KeyDeleteManyArgs} args - Arguments to filter Keys to delete.
     * @example
     * // Delete a few Keys
     * const { count } = await prisma.key.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends KeyDeleteManyArgs>(args?: SelectSubset<T, KeyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Keys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KeyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Keys
     * const key = await prisma.key.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends KeyUpdateManyArgs>(args: SelectSubset<T, KeyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Keys and returns the data updated in the database.
     * @param {KeyUpdateManyAndReturnArgs} args - Arguments to update many Keys.
     * @example
     * // Update many Keys
     * const key = await prisma.key.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Keys and only return the `id`
     * const keyWithIdOnly = await prisma.key.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends KeyUpdateManyAndReturnArgs>(args: SelectSubset<T, KeyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KeyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Key.
     * @param {KeyUpsertArgs} args - Arguments to update or create a Key.
     * @example
     * // Update or create a Key
     * const key = await prisma.key.upsert({
     *   create: {
     *     // ... data to create a Key
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Key we want to update
     *   }
     * })
     */
    upsert<T extends KeyUpsertArgs>(args: SelectSubset<T, KeyUpsertArgs<ExtArgs>>): Prisma__KeyClient<$Result.GetResult<Prisma.$KeyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Keys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KeyCountArgs} args - Arguments to filter Keys to count.
     * @example
     * // Count the number of Keys
     * const count = await prisma.key.count({
     *   where: {
     *     // ... the filter for the Keys we want to count
     *   }
     * })
    **/
    count<T extends KeyCountArgs>(
      args?: Subset<T, KeyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], KeyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Key.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KeyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends KeyAggregateArgs>(args: Subset<T, KeyAggregateArgs>): Prisma.PrismaPromise<GetKeyAggregateType<T>>

    /**
     * Group by Key.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KeyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends KeyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: KeyGroupByArgs['orderBy'] }
        : { orderBy?: KeyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, KeyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetKeyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Key model
   */
  readonly fields: KeyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Key.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__KeyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Key model
   */
  interface KeyFieldRefs {
    readonly id: FieldRef<"Key", 'Int'>
    readonly keyName: FieldRef<"Key", 'String'>
    readonly createdAt: FieldRef<"Key", 'DateTime'>
    readonly updatedAt: FieldRef<"Key", 'DateTime'>
    readonly deletedAt: FieldRef<"Key", 'DateTime'>
    readonly pubkey: FieldRef<"Key", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Key findUnique
   */
  export type KeyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Key
     */
    select?: KeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Key
     */
    omit?: KeyOmit<ExtArgs> | null
    /**
     * Filter, which Key to fetch.
     */
    where: KeyWhereUniqueInput
  }

  /**
   * Key findUniqueOrThrow
   */
  export type KeyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Key
     */
    select?: KeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Key
     */
    omit?: KeyOmit<ExtArgs> | null
    /**
     * Filter, which Key to fetch.
     */
    where: KeyWhereUniqueInput
  }

  /**
   * Key findFirst
   */
  export type KeyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Key
     */
    select?: KeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Key
     */
    omit?: KeyOmit<ExtArgs> | null
    /**
     * Filter, which Key to fetch.
     */
    where?: KeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Keys to fetch.
     */
    orderBy?: KeyOrderByWithRelationInput | KeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Keys.
     */
    cursor?: KeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Keys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Keys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Keys.
     */
    distinct?: KeyScalarFieldEnum | KeyScalarFieldEnum[]
  }

  /**
   * Key findFirstOrThrow
   */
  export type KeyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Key
     */
    select?: KeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Key
     */
    omit?: KeyOmit<ExtArgs> | null
    /**
     * Filter, which Key to fetch.
     */
    where?: KeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Keys to fetch.
     */
    orderBy?: KeyOrderByWithRelationInput | KeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Keys.
     */
    cursor?: KeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Keys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Keys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Keys.
     */
    distinct?: KeyScalarFieldEnum | KeyScalarFieldEnum[]
  }

  /**
   * Key findMany
   */
  export type KeyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Key
     */
    select?: KeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Key
     */
    omit?: KeyOmit<ExtArgs> | null
    /**
     * Filter, which Keys to fetch.
     */
    where?: KeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Keys to fetch.
     */
    orderBy?: KeyOrderByWithRelationInput | KeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Keys.
     */
    cursor?: KeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Keys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Keys.
     */
    skip?: number
    distinct?: KeyScalarFieldEnum | KeyScalarFieldEnum[]
  }

  /**
   * Key create
   */
  export type KeyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Key
     */
    select?: KeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Key
     */
    omit?: KeyOmit<ExtArgs> | null
    /**
     * The data needed to create a Key.
     */
    data: XOR<KeyCreateInput, KeyUncheckedCreateInput>
  }

  /**
   * Key createMany
   */
  export type KeyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Keys.
     */
    data: KeyCreateManyInput | KeyCreateManyInput[]
  }

  /**
   * Key createManyAndReturn
   */
  export type KeyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Key
     */
    select?: KeySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Key
     */
    omit?: KeyOmit<ExtArgs> | null
    /**
     * The data used to create many Keys.
     */
    data: KeyCreateManyInput | KeyCreateManyInput[]
  }

  /**
   * Key update
   */
  export type KeyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Key
     */
    select?: KeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Key
     */
    omit?: KeyOmit<ExtArgs> | null
    /**
     * The data needed to update a Key.
     */
    data: XOR<KeyUpdateInput, KeyUncheckedUpdateInput>
    /**
     * Choose, which Key to update.
     */
    where: KeyWhereUniqueInput
  }

  /**
   * Key updateMany
   */
  export type KeyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Keys.
     */
    data: XOR<KeyUpdateManyMutationInput, KeyUncheckedUpdateManyInput>
    /**
     * Filter which Keys to update
     */
    where?: KeyWhereInput
    /**
     * Limit how many Keys to update.
     */
    limit?: number
  }

  /**
   * Key updateManyAndReturn
   */
  export type KeyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Key
     */
    select?: KeySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Key
     */
    omit?: KeyOmit<ExtArgs> | null
    /**
     * The data used to update Keys.
     */
    data: XOR<KeyUpdateManyMutationInput, KeyUncheckedUpdateManyInput>
    /**
     * Filter which Keys to update
     */
    where?: KeyWhereInput
    /**
     * Limit how many Keys to update.
     */
    limit?: number
  }

  /**
   * Key upsert
   */
  export type KeyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Key
     */
    select?: KeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Key
     */
    omit?: KeyOmit<ExtArgs> | null
    /**
     * The filter to search for the Key to update in case it exists.
     */
    where: KeyWhereUniqueInput
    /**
     * In case the Key found by the `where` argument doesn't exist, create a new Key with this data.
     */
    create: XOR<KeyCreateInput, KeyUncheckedCreateInput>
    /**
     * In case the Key was found with the provided `where` argument, update it with this data.
     */
    update: XOR<KeyUpdateInput, KeyUncheckedUpdateInput>
  }

  /**
   * Key delete
   */
  export type KeyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Key
     */
    select?: KeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Key
     */
    omit?: KeyOmit<ExtArgs> | null
    /**
     * Filter which Key to delete.
     */
    where: KeyWhereUniqueInput
  }

  /**
   * Key deleteMany
   */
  export type KeyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Keys to delete
     */
    where?: KeyWhereInput
    /**
     * Limit how many Keys to delete.
     */
    limit?: number
  }

  /**
   * Key without action
   */
  export type KeyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Key
     */
    select?: KeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Key
     */
    omit?: KeyOmit<ExtArgs> | null
  }


  /**
   * Model SigningCondition
   */

  export type AggregateSigningCondition = {
    _count: SigningConditionCountAggregateOutputType | null
    _avg: SigningConditionAvgAggregateOutputType | null
    _sum: SigningConditionSumAggregateOutputType | null
    _min: SigningConditionMinAggregateOutputType | null
    _max: SigningConditionMaxAggregateOutputType | null
  }

  export type SigningConditionAvgAggregateOutputType = {
    id: number | null
    keyUserId: number | null
  }

  export type SigningConditionSumAggregateOutputType = {
    id: number | null
    keyUserId: number | null
  }

  export type SigningConditionMinAggregateOutputType = {
    id: number | null
    method: string | null
    kind: string | null
    content: string | null
    keyUserKeyName: string | null
    allowed: boolean | null
    keyUserId: number | null
  }

  export type SigningConditionMaxAggregateOutputType = {
    id: number | null
    method: string | null
    kind: string | null
    content: string | null
    keyUserKeyName: string | null
    allowed: boolean | null
    keyUserId: number | null
  }

  export type SigningConditionCountAggregateOutputType = {
    id: number
    method: number
    kind: number
    content: number
    keyUserKeyName: number
    allowed: number
    keyUserId: number
    _all: number
  }


  export type SigningConditionAvgAggregateInputType = {
    id?: true
    keyUserId?: true
  }

  export type SigningConditionSumAggregateInputType = {
    id?: true
    keyUserId?: true
  }

  export type SigningConditionMinAggregateInputType = {
    id?: true
    method?: true
    kind?: true
    content?: true
    keyUserKeyName?: true
    allowed?: true
    keyUserId?: true
  }

  export type SigningConditionMaxAggregateInputType = {
    id?: true
    method?: true
    kind?: true
    content?: true
    keyUserKeyName?: true
    allowed?: true
    keyUserId?: true
  }

  export type SigningConditionCountAggregateInputType = {
    id?: true
    method?: true
    kind?: true
    content?: true
    keyUserKeyName?: true
    allowed?: true
    keyUserId?: true
    _all?: true
  }

  export type SigningConditionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SigningCondition to aggregate.
     */
    where?: SigningConditionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SigningConditions to fetch.
     */
    orderBy?: SigningConditionOrderByWithRelationInput | SigningConditionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SigningConditionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SigningConditions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SigningConditions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SigningConditions
    **/
    _count?: true | SigningConditionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SigningConditionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SigningConditionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SigningConditionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SigningConditionMaxAggregateInputType
  }

  export type GetSigningConditionAggregateType<T extends SigningConditionAggregateArgs> = {
        [P in keyof T & keyof AggregateSigningCondition]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSigningCondition[P]>
      : GetScalarType<T[P], AggregateSigningCondition[P]>
  }




  export type SigningConditionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SigningConditionWhereInput
    orderBy?: SigningConditionOrderByWithAggregationInput | SigningConditionOrderByWithAggregationInput[]
    by: SigningConditionScalarFieldEnum[] | SigningConditionScalarFieldEnum
    having?: SigningConditionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SigningConditionCountAggregateInputType | true
    _avg?: SigningConditionAvgAggregateInputType
    _sum?: SigningConditionSumAggregateInputType
    _min?: SigningConditionMinAggregateInputType
    _max?: SigningConditionMaxAggregateInputType
  }

  export type SigningConditionGroupByOutputType = {
    id: number
    method: string | null
    kind: string | null
    content: string | null
    keyUserKeyName: string | null
    allowed: boolean | null
    keyUserId: number | null
    _count: SigningConditionCountAggregateOutputType | null
    _avg: SigningConditionAvgAggregateOutputType | null
    _sum: SigningConditionSumAggregateOutputType | null
    _min: SigningConditionMinAggregateOutputType | null
    _max: SigningConditionMaxAggregateOutputType | null
  }

  type GetSigningConditionGroupByPayload<T extends SigningConditionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SigningConditionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SigningConditionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SigningConditionGroupByOutputType[P]>
            : GetScalarType<T[P], SigningConditionGroupByOutputType[P]>
        }
      >
    >


  export type SigningConditionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    method?: boolean
    kind?: boolean
    content?: boolean
    keyUserKeyName?: boolean
    allowed?: boolean
    keyUserId?: boolean
    KeyUser?: boolean | SigningCondition$KeyUserArgs<ExtArgs>
  }, ExtArgs["result"]["signingCondition"]>

  export type SigningConditionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    method?: boolean
    kind?: boolean
    content?: boolean
    keyUserKeyName?: boolean
    allowed?: boolean
    keyUserId?: boolean
    KeyUser?: boolean | SigningCondition$KeyUserArgs<ExtArgs>
  }, ExtArgs["result"]["signingCondition"]>

  export type SigningConditionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    method?: boolean
    kind?: boolean
    content?: boolean
    keyUserKeyName?: boolean
    allowed?: boolean
    keyUserId?: boolean
    KeyUser?: boolean | SigningCondition$KeyUserArgs<ExtArgs>
  }, ExtArgs["result"]["signingCondition"]>

  export type SigningConditionSelectScalar = {
    id?: boolean
    method?: boolean
    kind?: boolean
    content?: boolean
    keyUserKeyName?: boolean
    allowed?: boolean
    keyUserId?: boolean
  }

  export type SigningConditionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "method" | "kind" | "content" | "keyUserKeyName" | "allowed" | "keyUserId", ExtArgs["result"]["signingCondition"]>
  export type SigningConditionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    KeyUser?: boolean | SigningCondition$KeyUserArgs<ExtArgs>
  }
  export type SigningConditionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    KeyUser?: boolean | SigningCondition$KeyUserArgs<ExtArgs>
  }
  export type SigningConditionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    KeyUser?: boolean | SigningCondition$KeyUserArgs<ExtArgs>
  }

  export type $SigningConditionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SigningCondition"
    objects: {
      KeyUser: Prisma.$KeyUserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      method: string | null
      kind: string | null
      content: string | null
      keyUserKeyName: string | null
      allowed: boolean | null
      keyUserId: number | null
    }, ExtArgs["result"]["signingCondition"]>
    composites: {}
  }

  type SigningConditionGetPayload<S extends boolean | null | undefined | SigningConditionDefaultArgs> = $Result.GetResult<Prisma.$SigningConditionPayload, S>

  type SigningConditionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SigningConditionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SigningConditionCountAggregateInputType | true
    }

  export interface SigningConditionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SigningCondition'], meta: { name: 'SigningCondition' } }
    /**
     * Find zero or one SigningCondition that matches the filter.
     * @param {SigningConditionFindUniqueArgs} args - Arguments to find a SigningCondition
     * @example
     * // Get one SigningCondition
     * const signingCondition = await prisma.signingCondition.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SigningConditionFindUniqueArgs>(args: SelectSubset<T, SigningConditionFindUniqueArgs<ExtArgs>>): Prisma__SigningConditionClient<$Result.GetResult<Prisma.$SigningConditionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SigningCondition that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SigningConditionFindUniqueOrThrowArgs} args - Arguments to find a SigningCondition
     * @example
     * // Get one SigningCondition
     * const signingCondition = await prisma.signingCondition.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SigningConditionFindUniqueOrThrowArgs>(args: SelectSubset<T, SigningConditionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SigningConditionClient<$Result.GetResult<Prisma.$SigningConditionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SigningCondition that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SigningConditionFindFirstArgs} args - Arguments to find a SigningCondition
     * @example
     * // Get one SigningCondition
     * const signingCondition = await prisma.signingCondition.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SigningConditionFindFirstArgs>(args?: SelectSubset<T, SigningConditionFindFirstArgs<ExtArgs>>): Prisma__SigningConditionClient<$Result.GetResult<Prisma.$SigningConditionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SigningCondition that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SigningConditionFindFirstOrThrowArgs} args - Arguments to find a SigningCondition
     * @example
     * // Get one SigningCondition
     * const signingCondition = await prisma.signingCondition.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SigningConditionFindFirstOrThrowArgs>(args?: SelectSubset<T, SigningConditionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SigningConditionClient<$Result.GetResult<Prisma.$SigningConditionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SigningConditions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SigningConditionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SigningConditions
     * const signingConditions = await prisma.signingCondition.findMany()
     * 
     * // Get first 10 SigningConditions
     * const signingConditions = await prisma.signingCondition.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const signingConditionWithIdOnly = await prisma.signingCondition.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SigningConditionFindManyArgs>(args?: SelectSubset<T, SigningConditionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SigningConditionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SigningCondition.
     * @param {SigningConditionCreateArgs} args - Arguments to create a SigningCondition.
     * @example
     * // Create one SigningCondition
     * const SigningCondition = await prisma.signingCondition.create({
     *   data: {
     *     // ... data to create a SigningCondition
     *   }
     * })
     * 
     */
    create<T extends SigningConditionCreateArgs>(args: SelectSubset<T, SigningConditionCreateArgs<ExtArgs>>): Prisma__SigningConditionClient<$Result.GetResult<Prisma.$SigningConditionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SigningConditions.
     * @param {SigningConditionCreateManyArgs} args - Arguments to create many SigningConditions.
     * @example
     * // Create many SigningConditions
     * const signingCondition = await prisma.signingCondition.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SigningConditionCreateManyArgs>(args?: SelectSubset<T, SigningConditionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SigningConditions and returns the data saved in the database.
     * @param {SigningConditionCreateManyAndReturnArgs} args - Arguments to create many SigningConditions.
     * @example
     * // Create many SigningConditions
     * const signingCondition = await prisma.signingCondition.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SigningConditions and only return the `id`
     * const signingConditionWithIdOnly = await prisma.signingCondition.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SigningConditionCreateManyAndReturnArgs>(args?: SelectSubset<T, SigningConditionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SigningConditionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SigningCondition.
     * @param {SigningConditionDeleteArgs} args - Arguments to delete one SigningCondition.
     * @example
     * // Delete one SigningCondition
     * const SigningCondition = await prisma.signingCondition.delete({
     *   where: {
     *     // ... filter to delete one SigningCondition
     *   }
     * })
     * 
     */
    delete<T extends SigningConditionDeleteArgs>(args: SelectSubset<T, SigningConditionDeleteArgs<ExtArgs>>): Prisma__SigningConditionClient<$Result.GetResult<Prisma.$SigningConditionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SigningCondition.
     * @param {SigningConditionUpdateArgs} args - Arguments to update one SigningCondition.
     * @example
     * // Update one SigningCondition
     * const signingCondition = await prisma.signingCondition.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SigningConditionUpdateArgs>(args: SelectSubset<T, SigningConditionUpdateArgs<ExtArgs>>): Prisma__SigningConditionClient<$Result.GetResult<Prisma.$SigningConditionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SigningConditions.
     * @param {SigningConditionDeleteManyArgs} args - Arguments to filter SigningConditions to delete.
     * @example
     * // Delete a few SigningConditions
     * const { count } = await prisma.signingCondition.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SigningConditionDeleteManyArgs>(args?: SelectSubset<T, SigningConditionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SigningConditions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SigningConditionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SigningConditions
     * const signingCondition = await prisma.signingCondition.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SigningConditionUpdateManyArgs>(args: SelectSubset<T, SigningConditionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SigningConditions and returns the data updated in the database.
     * @param {SigningConditionUpdateManyAndReturnArgs} args - Arguments to update many SigningConditions.
     * @example
     * // Update many SigningConditions
     * const signingCondition = await prisma.signingCondition.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SigningConditions and only return the `id`
     * const signingConditionWithIdOnly = await prisma.signingCondition.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SigningConditionUpdateManyAndReturnArgs>(args: SelectSubset<T, SigningConditionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SigningConditionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SigningCondition.
     * @param {SigningConditionUpsertArgs} args - Arguments to update or create a SigningCondition.
     * @example
     * // Update or create a SigningCondition
     * const signingCondition = await prisma.signingCondition.upsert({
     *   create: {
     *     // ... data to create a SigningCondition
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SigningCondition we want to update
     *   }
     * })
     */
    upsert<T extends SigningConditionUpsertArgs>(args: SelectSubset<T, SigningConditionUpsertArgs<ExtArgs>>): Prisma__SigningConditionClient<$Result.GetResult<Prisma.$SigningConditionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SigningConditions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SigningConditionCountArgs} args - Arguments to filter SigningConditions to count.
     * @example
     * // Count the number of SigningConditions
     * const count = await prisma.signingCondition.count({
     *   where: {
     *     // ... the filter for the SigningConditions we want to count
     *   }
     * })
    **/
    count<T extends SigningConditionCountArgs>(
      args?: Subset<T, SigningConditionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SigningConditionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SigningCondition.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SigningConditionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SigningConditionAggregateArgs>(args: Subset<T, SigningConditionAggregateArgs>): Prisma.PrismaPromise<GetSigningConditionAggregateType<T>>

    /**
     * Group by SigningCondition.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SigningConditionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SigningConditionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SigningConditionGroupByArgs['orderBy'] }
        : { orderBy?: SigningConditionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SigningConditionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSigningConditionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SigningCondition model
   */
  readonly fields: SigningConditionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SigningCondition.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SigningConditionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    KeyUser<T extends SigningCondition$KeyUserArgs<ExtArgs> = {}>(args?: Subset<T, SigningCondition$KeyUserArgs<ExtArgs>>): Prisma__KeyUserClient<$Result.GetResult<Prisma.$KeyUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SigningCondition model
   */
  interface SigningConditionFieldRefs {
    readonly id: FieldRef<"SigningCondition", 'Int'>
    readonly method: FieldRef<"SigningCondition", 'String'>
    readonly kind: FieldRef<"SigningCondition", 'String'>
    readonly content: FieldRef<"SigningCondition", 'String'>
    readonly keyUserKeyName: FieldRef<"SigningCondition", 'String'>
    readonly allowed: FieldRef<"SigningCondition", 'Boolean'>
    readonly keyUserId: FieldRef<"SigningCondition", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * SigningCondition findUnique
   */
  export type SigningConditionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SigningCondition
     */
    select?: SigningConditionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SigningCondition
     */
    omit?: SigningConditionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SigningConditionInclude<ExtArgs> | null
    /**
     * Filter, which SigningCondition to fetch.
     */
    where: SigningConditionWhereUniqueInput
  }

  /**
   * SigningCondition findUniqueOrThrow
   */
  export type SigningConditionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SigningCondition
     */
    select?: SigningConditionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SigningCondition
     */
    omit?: SigningConditionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SigningConditionInclude<ExtArgs> | null
    /**
     * Filter, which SigningCondition to fetch.
     */
    where: SigningConditionWhereUniqueInput
  }

  /**
   * SigningCondition findFirst
   */
  export type SigningConditionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SigningCondition
     */
    select?: SigningConditionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SigningCondition
     */
    omit?: SigningConditionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SigningConditionInclude<ExtArgs> | null
    /**
     * Filter, which SigningCondition to fetch.
     */
    where?: SigningConditionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SigningConditions to fetch.
     */
    orderBy?: SigningConditionOrderByWithRelationInput | SigningConditionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SigningConditions.
     */
    cursor?: SigningConditionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SigningConditions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SigningConditions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SigningConditions.
     */
    distinct?: SigningConditionScalarFieldEnum | SigningConditionScalarFieldEnum[]
  }

  /**
   * SigningCondition findFirstOrThrow
   */
  export type SigningConditionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SigningCondition
     */
    select?: SigningConditionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SigningCondition
     */
    omit?: SigningConditionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SigningConditionInclude<ExtArgs> | null
    /**
     * Filter, which SigningCondition to fetch.
     */
    where?: SigningConditionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SigningConditions to fetch.
     */
    orderBy?: SigningConditionOrderByWithRelationInput | SigningConditionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SigningConditions.
     */
    cursor?: SigningConditionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SigningConditions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SigningConditions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SigningConditions.
     */
    distinct?: SigningConditionScalarFieldEnum | SigningConditionScalarFieldEnum[]
  }

  /**
   * SigningCondition findMany
   */
  export type SigningConditionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SigningCondition
     */
    select?: SigningConditionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SigningCondition
     */
    omit?: SigningConditionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SigningConditionInclude<ExtArgs> | null
    /**
     * Filter, which SigningConditions to fetch.
     */
    where?: SigningConditionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SigningConditions to fetch.
     */
    orderBy?: SigningConditionOrderByWithRelationInput | SigningConditionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SigningConditions.
     */
    cursor?: SigningConditionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SigningConditions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SigningConditions.
     */
    skip?: number
    distinct?: SigningConditionScalarFieldEnum | SigningConditionScalarFieldEnum[]
  }

  /**
   * SigningCondition create
   */
  export type SigningConditionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SigningCondition
     */
    select?: SigningConditionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SigningCondition
     */
    omit?: SigningConditionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SigningConditionInclude<ExtArgs> | null
    /**
     * The data needed to create a SigningCondition.
     */
    data?: XOR<SigningConditionCreateInput, SigningConditionUncheckedCreateInput>
  }

  /**
   * SigningCondition createMany
   */
  export type SigningConditionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SigningConditions.
     */
    data: SigningConditionCreateManyInput | SigningConditionCreateManyInput[]
  }

  /**
   * SigningCondition createManyAndReturn
   */
  export type SigningConditionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SigningCondition
     */
    select?: SigningConditionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SigningCondition
     */
    omit?: SigningConditionOmit<ExtArgs> | null
    /**
     * The data used to create many SigningConditions.
     */
    data: SigningConditionCreateManyInput | SigningConditionCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SigningConditionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SigningCondition update
   */
  export type SigningConditionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SigningCondition
     */
    select?: SigningConditionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SigningCondition
     */
    omit?: SigningConditionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SigningConditionInclude<ExtArgs> | null
    /**
     * The data needed to update a SigningCondition.
     */
    data: XOR<SigningConditionUpdateInput, SigningConditionUncheckedUpdateInput>
    /**
     * Choose, which SigningCondition to update.
     */
    where: SigningConditionWhereUniqueInput
  }

  /**
   * SigningCondition updateMany
   */
  export type SigningConditionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SigningConditions.
     */
    data: XOR<SigningConditionUpdateManyMutationInput, SigningConditionUncheckedUpdateManyInput>
    /**
     * Filter which SigningConditions to update
     */
    where?: SigningConditionWhereInput
    /**
     * Limit how many SigningConditions to update.
     */
    limit?: number
  }

  /**
   * SigningCondition updateManyAndReturn
   */
  export type SigningConditionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SigningCondition
     */
    select?: SigningConditionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SigningCondition
     */
    omit?: SigningConditionOmit<ExtArgs> | null
    /**
     * The data used to update SigningConditions.
     */
    data: XOR<SigningConditionUpdateManyMutationInput, SigningConditionUncheckedUpdateManyInput>
    /**
     * Filter which SigningConditions to update
     */
    where?: SigningConditionWhereInput
    /**
     * Limit how many SigningConditions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SigningConditionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SigningCondition upsert
   */
  export type SigningConditionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SigningCondition
     */
    select?: SigningConditionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SigningCondition
     */
    omit?: SigningConditionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SigningConditionInclude<ExtArgs> | null
    /**
     * The filter to search for the SigningCondition to update in case it exists.
     */
    where: SigningConditionWhereUniqueInput
    /**
     * In case the SigningCondition found by the `where` argument doesn't exist, create a new SigningCondition with this data.
     */
    create: XOR<SigningConditionCreateInput, SigningConditionUncheckedCreateInput>
    /**
     * In case the SigningCondition was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SigningConditionUpdateInput, SigningConditionUncheckedUpdateInput>
  }

  /**
   * SigningCondition delete
   */
  export type SigningConditionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SigningCondition
     */
    select?: SigningConditionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SigningCondition
     */
    omit?: SigningConditionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SigningConditionInclude<ExtArgs> | null
    /**
     * Filter which SigningCondition to delete.
     */
    where: SigningConditionWhereUniqueInput
  }

  /**
   * SigningCondition deleteMany
   */
  export type SigningConditionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SigningConditions to delete
     */
    where?: SigningConditionWhereInput
    /**
     * Limit how many SigningConditions to delete.
     */
    limit?: number
  }

  /**
   * SigningCondition.KeyUser
   */
  export type SigningCondition$KeyUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KeyUser
     */
    select?: KeyUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KeyUser
     */
    omit?: KeyUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeyUserInclude<ExtArgs> | null
    where?: KeyUserWhereInput
  }

  /**
   * SigningCondition without action
   */
  export type SigningConditionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SigningCondition
     */
    select?: SigningConditionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SigningCondition
     */
    omit?: SigningConditionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SigningConditionInclude<ExtArgs> | null
  }


  /**
   * Model Log
   */

  export type AggregateLog = {
    _count: LogCountAggregateOutputType | null
    _avg: LogAvgAggregateOutputType | null
    _sum: LogSumAggregateOutputType | null
    _min: LogMinAggregateOutputType | null
    _max: LogMaxAggregateOutputType | null
  }

  export type LogAvgAggregateOutputType = {
    id: number | null
    keyUserId: number | null
  }

  export type LogSumAggregateOutputType = {
    id: number | null
    keyUserId: number | null
  }

  export type LogMinAggregateOutputType = {
    id: number | null
    timestamp: Date | null
    type: string | null
    method: string | null
    params: string | null
    keyUserId: number | null
    autoApproved: boolean | null
    approvalType: string | null
    keyName: string | null
    remotePubkey: string | null
  }

  export type LogMaxAggregateOutputType = {
    id: number | null
    timestamp: Date | null
    type: string | null
    method: string | null
    params: string | null
    keyUserId: number | null
    autoApproved: boolean | null
    approvalType: string | null
    keyName: string | null
    remotePubkey: string | null
  }

  export type LogCountAggregateOutputType = {
    id: number
    timestamp: number
    type: number
    method: number
    params: number
    keyUserId: number
    autoApproved: number
    approvalType: number
    keyName: number
    remotePubkey: number
    _all: number
  }


  export type LogAvgAggregateInputType = {
    id?: true
    keyUserId?: true
  }

  export type LogSumAggregateInputType = {
    id?: true
    keyUserId?: true
  }

  export type LogMinAggregateInputType = {
    id?: true
    timestamp?: true
    type?: true
    method?: true
    params?: true
    keyUserId?: true
    autoApproved?: true
    approvalType?: true
    keyName?: true
    remotePubkey?: true
  }

  export type LogMaxAggregateInputType = {
    id?: true
    timestamp?: true
    type?: true
    method?: true
    params?: true
    keyUserId?: true
    autoApproved?: true
    approvalType?: true
    keyName?: true
    remotePubkey?: true
  }

  export type LogCountAggregateInputType = {
    id?: true
    timestamp?: true
    type?: true
    method?: true
    params?: true
    keyUserId?: true
    autoApproved?: true
    approvalType?: true
    keyName?: true
    remotePubkey?: true
    _all?: true
  }

  export type LogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Log to aggregate.
     */
    where?: LogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Logs to fetch.
     */
    orderBy?: LogOrderByWithRelationInput | LogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Logs
    **/
    _count?: true | LogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LogMaxAggregateInputType
  }

  export type GetLogAggregateType<T extends LogAggregateArgs> = {
        [P in keyof T & keyof AggregateLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLog[P]>
      : GetScalarType<T[P], AggregateLog[P]>
  }




  export type LogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LogWhereInput
    orderBy?: LogOrderByWithAggregationInput | LogOrderByWithAggregationInput[]
    by: LogScalarFieldEnum[] | LogScalarFieldEnum
    having?: LogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LogCountAggregateInputType | true
    _avg?: LogAvgAggregateInputType
    _sum?: LogSumAggregateInputType
    _min?: LogMinAggregateInputType
    _max?: LogMaxAggregateInputType
  }

  export type LogGroupByOutputType = {
    id: number
    timestamp: Date
    type: string
    method: string | null
    params: string | null
    keyUserId: number | null
    autoApproved: boolean
    approvalType: string | null
    keyName: string | null
    remotePubkey: string | null
    _count: LogCountAggregateOutputType | null
    _avg: LogAvgAggregateOutputType | null
    _sum: LogSumAggregateOutputType | null
    _min: LogMinAggregateOutputType | null
    _max: LogMaxAggregateOutputType | null
  }

  type GetLogGroupByPayload<T extends LogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LogGroupByOutputType[P]>
            : GetScalarType<T[P], LogGroupByOutputType[P]>
        }
      >
    >


  export type LogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    timestamp?: boolean
    type?: boolean
    method?: boolean
    params?: boolean
    keyUserId?: boolean
    autoApproved?: boolean
    approvalType?: boolean
    keyName?: boolean
    remotePubkey?: boolean
    KeyUser?: boolean | Log$KeyUserArgs<ExtArgs>
  }, ExtArgs["result"]["log"]>

  export type LogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    timestamp?: boolean
    type?: boolean
    method?: boolean
    params?: boolean
    keyUserId?: boolean
    autoApproved?: boolean
    approvalType?: boolean
    keyName?: boolean
    remotePubkey?: boolean
    KeyUser?: boolean | Log$KeyUserArgs<ExtArgs>
  }, ExtArgs["result"]["log"]>

  export type LogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    timestamp?: boolean
    type?: boolean
    method?: boolean
    params?: boolean
    keyUserId?: boolean
    autoApproved?: boolean
    approvalType?: boolean
    keyName?: boolean
    remotePubkey?: boolean
    KeyUser?: boolean | Log$KeyUserArgs<ExtArgs>
  }, ExtArgs["result"]["log"]>

  export type LogSelectScalar = {
    id?: boolean
    timestamp?: boolean
    type?: boolean
    method?: boolean
    params?: boolean
    keyUserId?: boolean
    autoApproved?: boolean
    approvalType?: boolean
    keyName?: boolean
    remotePubkey?: boolean
  }

  export type LogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "timestamp" | "type" | "method" | "params" | "keyUserId" | "autoApproved" | "approvalType" | "keyName" | "remotePubkey", ExtArgs["result"]["log"]>
  export type LogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    KeyUser?: boolean | Log$KeyUserArgs<ExtArgs>
  }
  export type LogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    KeyUser?: boolean | Log$KeyUserArgs<ExtArgs>
  }
  export type LogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    KeyUser?: boolean | Log$KeyUserArgs<ExtArgs>
  }

  export type $LogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Log"
    objects: {
      KeyUser: Prisma.$KeyUserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      timestamp: Date
      type: string
      method: string | null
      params: string | null
      keyUserId: number | null
      autoApproved: boolean
      approvalType: string | null
      keyName: string | null
      remotePubkey: string | null
    }, ExtArgs["result"]["log"]>
    composites: {}
  }

  type LogGetPayload<S extends boolean | null | undefined | LogDefaultArgs> = $Result.GetResult<Prisma.$LogPayload, S>

  type LogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LogCountAggregateInputType | true
    }

  export interface LogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Log'], meta: { name: 'Log' } }
    /**
     * Find zero or one Log that matches the filter.
     * @param {LogFindUniqueArgs} args - Arguments to find a Log
     * @example
     * // Get one Log
     * const log = await prisma.log.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LogFindUniqueArgs>(args: SelectSubset<T, LogFindUniqueArgs<ExtArgs>>): Prisma__LogClient<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Log that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LogFindUniqueOrThrowArgs} args - Arguments to find a Log
     * @example
     * // Get one Log
     * const log = await prisma.log.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LogFindUniqueOrThrowArgs>(args: SelectSubset<T, LogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LogClient<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Log that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogFindFirstArgs} args - Arguments to find a Log
     * @example
     * // Get one Log
     * const log = await prisma.log.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LogFindFirstArgs>(args?: SelectSubset<T, LogFindFirstArgs<ExtArgs>>): Prisma__LogClient<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Log that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogFindFirstOrThrowArgs} args - Arguments to find a Log
     * @example
     * // Get one Log
     * const log = await prisma.log.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LogFindFirstOrThrowArgs>(args?: SelectSubset<T, LogFindFirstOrThrowArgs<ExtArgs>>): Prisma__LogClient<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Logs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Logs
     * const logs = await prisma.log.findMany()
     * 
     * // Get first 10 Logs
     * const logs = await prisma.log.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const logWithIdOnly = await prisma.log.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LogFindManyArgs>(args?: SelectSubset<T, LogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Log.
     * @param {LogCreateArgs} args - Arguments to create a Log.
     * @example
     * // Create one Log
     * const Log = await prisma.log.create({
     *   data: {
     *     // ... data to create a Log
     *   }
     * })
     * 
     */
    create<T extends LogCreateArgs>(args: SelectSubset<T, LogCreateArgs<ExtArgs>>): Prisma__LogClient<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Logs.
     * @param {LogCreateManyArgs} args - Arguments to create many Logs.
     * @example
     * // Create many Logs
     * const log = await prisma.log.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LogCreateManyArgs>(args?: SelectSubset<T, LogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Logs and returns the data saved in the database.
     * @param {LogCreateManyAndReturnArgs} args - Arguments to create many Logs.
     * @example
     * // Create many Logs
     * const log = await prisma.log.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Logs and only return the `id`
     * const logWithIdOnly = await prisma.log.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LogCreateManyAndReturnArgs>(args?: SelectSubset<T, LogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Log.
     * @param {LogDeleteArgs} args - Arguments to delete one Log.
     * @example
     * // Delete one Log
     * const Log = await prisma.log.delete({
     *   where: {
     *     // ... filter to delete one Log
     *   }
     * })
     * 
     */
    delete<T extends LogDeleteArgs>(args: SelectSubset<T, LogDeleteArgs<ExtArgs>>): Prisma__LogClient<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Log.
     * @param {LogUpdateArgs} args - Arguments to update one Log.
     * @example
     * // Update one Log
     * const log = await prisma.log.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LogUpdateArgs>(args: SelectSubset<T, LogUpdateArgs<ExtArgs>>): Prisma__LogClient<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Logs.
     * @param {LogDeleteManyArgs} args - Arguments to filter Logs to delete.
     * @example
     * // Delete a few Logs
     * const { count } = await prisma.log.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LogDeleteManyArgs>(args?: SelectSubset<T, LogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Logs
     * const log = await prisma.log.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LogUpdateManyArgs>(args: SelectSubset<T, LogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Logs and returns the data updated in the database.
     * @param {LogUpdateManyAndReturnArgs} args - Arguments to update many Logs.
     * @example
     * // Update many Logs
     * const log = await prisma.log.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Logs and only return the `id`
     * const logWithIdOnly = await prisma.log.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LogUpdateManyAndReturnArgs>(args: SelectSubset<T, LogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Log.
     * @param {LogUpsertArgs} args - Arguments to update or create a Log.
     * @example
     * // Update or create a Log
     * const log = await prisma.log.upsert({
     *   create: {
     *     // ... data to create a Log
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Log we want to update
     *   }
     * })
     */
    upsert<T extends LogUpsertArgs>(args: SelectSubset<T, LogUpsertArgs<ExtArgs>>): Prisma__LogClient<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogCountArgs} args - Arguments to filter Logs to count.
     * @example
     * // Count the number of Logs
     * const count = await prisma.log.count({
     *   where: {
     *     // ... the filter for the Logs we want to count
     *   }
     * })
    **/
    count<T extends LogCountArgs>(
      args?: Subset<T, LogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Log.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LogAggregateArgs>(args: Subset<T, LogAggregateArgs>): Prisma.PrismaPromise<GetLogAggregateType<T>>

    /**
     * Group by Log.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LogGroupByArgs['orderBy'] }
        : { orderBy?: LogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Log model
   */
  readonly fields: LogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Log.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    KeyUser<T extends Log$KeyUserArgs<ExtArgs> = {}>(args?: Subset<T, Log$KeyUserArgs<ExtArgs>>): Prisma__KeyUserClient<$Result.GetResult<Prisma.$KeyUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Log model
   */
  interface LogFieldRefs {
    readonly id: FieldRef<"Log", 'Int'>
    readonly timestamp: FieldRef<"Log", 'DateTime'>
    readonly type: FieldRef<"Log", 'String'>
    readonly method: FieldRef<"Log", 'String'>
    readonly params: FieldRef<"Log", 'String'>
    readonly keyUserId: FieldRef<"Log", 'Int'>
    readonly autoApproved: FieldRef<"Log", 'Boolean'>
    readonly approvalType: FieldRef<"Log", 'String'>
    readonly keyName: FieldRef<"Log", 'String'>
    readonly remotePubkey: FieldRef<"Log", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Log findUnique
   */
  export type LogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogInclude<ExtArgs> | null
    /**
     * Filter, which Log to fetch.
     */
    where: LogWhereUniqueInput
  }

  /**
   * Log findUniqueOrThrow
   */
  export type LogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogInclude<ExtArgs> | null
    /**
     * Filter, which Log to fetch.
     */
    where: LogWhereUniqueInput
  }

  /**
   * Log findFirst
   */
  export type LogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogInclude<ExtArgs> | null
    /**
     * Filter, which Log to fetch.
     */
    where?: LogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Logs to fetch.
     */
    orderBy?: LogOrderByWithRelationInput | LogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Logs.
     */
    cursor?: LogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Logs.
     */
    distinct?: LogScalarFieldEnum | LogScalarFieldEnum[]
  }

  /**
   * Log findFirstOrThrow
   */
  export type LogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogInclude<ExtArgs> | null
    /**
     * Filter, which Log to fetch.
     */
    where?: LogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Logs to fetch.
     */
    orderBy?: LogOrderByWithRelationInput | LogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Logs.
     */
    cursor?: LogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Logs.
     */
    distinct?: LogScalarFieldEnum | LogScalarFieldEnum[]
  }

  /**
   * Log findMany
   */
  export type LogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogInclude<ExtArgs> | null
    /**
     * Filter, which Logs to fetch.
     */
    where?: LogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Logs to fetch.
     */
    orderBy?: LogOrderByWithRelationInput | LogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Logs.
     */
    cursor?: LogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Logs.
     */
    skip?: number
    distinct?: LogScalarFieldEnum | LogScalarFieldEnum[]
  }

  /**
   * Log create
   */
  export type LogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogInclude<ExtArgs> | null
    /**
     * The data needed to create a Log.
     */
    data: XOR<LogCreateInput, LogUncheckedCreateInput>
  }

  /**
   * Log createMany
   */
  export type LogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Logs.
     */
    data: LogCreateManyInput | LogCreateManyInput[]
  }

  /**
   * Log createManyAndReturn
   */
  export type LogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * The data used to create many Logs.
     */
    data: LogCreateManyInput | LogCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Log update
   */
  export type LogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogInclude<ExtArgs> | null
    /**
     * The data needed to update a Log.
     */
    data: XOR<LogUpdateInput, LogUncheckedUpdateInput>
    /**
     * Choose, which Log to update.
     */
    where: LogWhereUniqueInput
  }

  /**
   * Log updateMany
   */
  export type LogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Logs.
     */
    data: XOR<LogUpdateManyMutationInput, LogUncheckedUpdateManyInput>
    /**
     * Filter which Logs to update
     */
    where?: LogWhereInput
    /**
     * Limit how many Logs to update.
     */
    limit?: number
  }

  /**
   * Log updateManyAndReturn
   */
  export type LogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * The data used to update Logs.
     */
    data: XOR<LogUpdateManyMutationInput, LogUncheckedUpdateManyInput>
    /**
     * Filter which Logs to update
     */
    where?: LogWhereInput
    /**
     * Limit how many Logs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Log upsert
   */
  export type LogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogInclude<ExtArgs> | null
    /**
     * The filter to search for the Log to update in case it exists.
     */
    where: LogWhereUniqueInput
    /**
     * In case the Log found by the `where` argument doesn't exist, create a new Log with this data.
     */
    create: XOR<LogCreateInput, LogUncheckedCreateInput>
    /**
     * In case the Log was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LogUpdateInput, LogUncheckedUpdateInput>
  }

  /**
   * Log delete
   */
  export type LogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogInclude<ExtArgs> | null
    /**
     * Filter which Log to delete.
     */
    where: LogWhereUniqueInput
  }

  /**
   * Log deleteMany
   */
  export type LogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Logs to delete
     */
    where?: LogWhereInput
    /**
     * Limit how many Logs to delete.
     */
    limit?: number
  }

  /**
   * Log.KeyUser
   */
  export type Log$KeyUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KeyUser
     */
    select?: KeyUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KeyUser
     */
    omit?: KeyUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeyUserInclude<ExtArgs> | null
    where?: KeyUserWhereInput
  }

  /**
   * Log without action
   */
  export type LogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogInclude<ExtArgs> | null
  }


  /**
   * Model Policy
   */

  export type AggregatePolicy = {
    _count: PolicyCountAggregateOutputType | null
    _avg: PolicyAvgAggregateOutputType | null
    _sum: PolicySumAggregateOutputType | null
    _min: PolicyMinAggregateOutputType | null
    _max: PolicyMaxAggregateOutputType | null
  }

  export type PolicyAvgAggregateOutputType = {
    id: number | null
  }

  export type PolicySumAggregateOutputType = {
    id: number | null
  }

  export type PolicyMinAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
    expiresAt: Date | null
    deletedAt: Date | null
    description: string | null
  }

  export type PolicyMaxAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
    expiresAt: Date | null
    deletedAt: Date | null
    description: string | null
  }

  export type PolicyCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    expiresAt: number
    deletedAt: number
    description: number
    _all: number
  }


  export type PolicyAvgAggregateInputType = {
    id?: true
  }

  export type PolicySumAggregateInputType = {
    id?: true
  }

  export type PolicyMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    expiresAt?: true
    deletedAt?: true
    description?: true
  }

  export type PolicyMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    expiresAt?: true
    deletedAt?: true
    description?: true
  }

  export type PolicyCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    expiresAt?: true
    deletedAt?: true
    description?: true
    _all?: true
  }

  export type PolicyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Policy to aggregate.
     */
    where?: PolicyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Policies to fetch.
     */
    orderBy?: PolicyOrderByWithRelationInput | PolicyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PolicyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Policies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Policies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Policies
    **/
    _count?: true | PolicyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PolicyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PolicySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PolicyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PolicyMaxAggregateInputType
  }

  export type GetPolicyAggregateType<T extends PolicyAggregateArgs> = {
        [P in keyof T & keyof AggregatePolicy]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePolicy[P]>
      : GetScalarType<T[P], AggregatePolicy[P]>
  }




  export type PolicyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PolicyWhereInput
    orderBy?: PolicyOrderByWithAggregationInput | PolicyOrderByWithAggregationInput[]
    by: PolicyScalarFieldEnum[] | PolicyScalarFieldEnum
    having?: PolicyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PolicyCountAggregateInputType | true
    _avg?: PolicyAvgAggregateInputType
    _sum?: PolicySumAggregateInputType
    _min?: PolicyMinAggregateInputType
    _max?: PolicyMaxAggregateInputType
  }

  export type PolicyGroupByOutputType = {
    id: number
    name: string
    createdAt: Date
    updatedAt: Date
    expiresAt: Date | null
    deletedAt: Date | null
    description: string | null
    _count: PolicyCountAggregateOutputType | null
    _avg: PolicyAvgAggregateOutputType | null
    _sum: PolicySumAggregateOutputType | null
    _min: PolicyMinAggregateOutputType | null
    _max: PolicyMaxAggregateOutputType | null
  }

  type GetPolicyGroupByPayload<T extends PolicyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PolicyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PolicyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PolicyGroupByOutputType[P]>
            : GetScalarType<T[P], PolicyGroupByOutputType[P]>
        }
      >
    >


  export type PolicySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    expiresAt?: boolean
    deletedAt?: boolean
    description?: boolean
    rules?: boolean | Policy$rulesArgs<ExtArgs>
    Token?: boolean | Policy$TokenArgs<ExtArgs>
    _count?: boolean | PolicyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["policy"]>

  export type PolicySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    expiresAt?: boolean
    deletedAt?: boolean
    description?: boolean
  }, ExtArgs["result"]["policy"]>

  export type PolicySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    expiresAt?: boolean
    deletedAt?: boolean
    description?: boolean
  }, ExtArgs["result"]["policy"]>

  export type PolicySelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    expiresAt?: boolean
    deletedAt?: boolean
    description?: boolean
  }

  export type PolicyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt" | "updatedAt" | "expiresAt" | "deletedAt" | "description", ExtArgs["result"]["policy"]>
  export type PolicyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rules?: boolean | Policy$rulesArgs<ExtArgs>
    Token?: boolean | Policy$TokenArgs<ExtArgs>
    _count?: boolean | PolicyCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PolicyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PolicyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PolicyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Policy"
    objects: {
      rules: Prisma.$PolicyRulePayload<ExtArgs>[]
      Token: Prisma.$TokenPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      createdAt: Date
      updatedAt: Date
      expiresAt: Date | null
      deletedAt: Date | null
      description: string | null
    }, ExtArgs["result"]["policy"]>
    composites: {}
  }

  type PolicyGetPayload<S extends boolean | null | undefined | PolicyDefaultArgs> = $Result.GetResult<Prisma.$PolicyPayload, S>

  type PolicyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PolicyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PolicyCountAggregateInputType | true
    }

  export interface PolicyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Policy'], meta: { name: 'Policy' } }
    /**
     * Find zero or one Policy that matches the filter.
     * @param {PolicyFindUniqueArgs} args - Arguments to find a Policy
     * @example
     * // Get one Policy
     * const policy = await prisma.policy.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PolicyFindUniqueArgs>(args: SelectSubset<T, PolicyFindUniqueArgs<ExtArgs>>): Prisma__PolicyClient<$Result.GetResult<Prisma.$PolicyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Policy that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PolicyFindUniqueOrThrowArgs} args - Arguments to find a Policy
     * @example
     * // Get one Policy
     * const policy = await prisma.policy.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PolicyFindUniqueOrThrowArgs>(args: SelectSubset<T, PolicyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PolicyClient<$Result.GetResult<Prisma.$PolicyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Policy that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PolicyFindFirstArgs} args - Arguments to find a Policy
     * @example
     * // Get one Policy
     * const policy = await prisma.policy.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PolicyFindFirstArgs>(args?: SelectSubset<T, PolicyFindFirstArgs<ExtArgs>>): Prisma__PolicyClient<$Result.GetResult<Prisma.$PolicyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Policy that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PolicyFindFirstOrThrowArgs} args - Arguments to find a Policy
     * @example
     * // Get one Policy
     * const policy = await prisma.policy.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PolicyFindFirstOrThrowArgs>(args?: SelectSubset<T, PolicyFindFirstOrThrowArgs<ExtArgs>>): Prisma__PolicyClient<$Result.GetResult<Prisma.$PolicyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Policies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PolicyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Policies
     * const policies = await prisma.policy.findMany()
     * 
     * // Get first 10 Policies
     * const policies = await prisma.policy.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const policyWithIdOnly = await prisma.policy.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PolicyFindManyArgs>(args?: SelectSubset<T, PolicyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PolicyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Policy.
     * @param {PolicyCreateArgs} args - Arguments to create a Policy.
     * @example
     * // Create one Policy
     * const Policy = await prisma.policy.create({
     *   data: {
     *     // ... data to create a Policy
     *   }
     * })
     * 
     */
    create<T extends PolicyCreateArgs>(args: SelectSubset<T, PolicyCreateArgs<ExtArgs>>): Prisma__PolicyClient<$Result.GetResult<Prisma.$PolicyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Policies.
     * @param {PolicyCreateManyArgs} args - Arguments to create many Policies.
     * @example
     * // Create many Policies
     * const policy = await prisma.policy.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PolicyCreateManyArgs>(args?: SelectSubset<T, PolicyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Policies and returns the data saved in the database.
     * @param {PolicyCreateManyAndReturnArgs} args - Arguments to create many Policies.
     * @example
     * // Create many Policies
     * const policy = await prisma.policy.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Policies and only return the `id`
     * const policyWithIdOnly = await prisma.policy.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PolicyCreateManyAndReturnArgs>(args?: SelectSubset<T, PolicyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PolicyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Policy.
     * @param {PolicyDeleteArgs} args - Arguments to delete one Policy.
     * @example
     * // Delete one Policy
     * const Policy = await prisma.policy.delete({
     *   where: {
     *     // ... filter to delete one Policy
     *   }
     * })
     * 
     */
    delete<T extends PolicyDeleteArgs>(args: SelectSubset<T, PolicyDeleteArgs<ExtArgs>>): Prisma__PolicyClient<$Result.GetResult<Prisma.$PolicyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Policy.
     * @param {PolicyUpdateArgs} args - Arguments to update one Policy.
     * @example
     * // Update one Policy
     * const policy = await prisma.policy.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PolicyUpdateArgs>(args: SelectSubset<T, PolicyUpdateArgs<ExtArgs>>): Prisma__PolicyClient<$Result.GetResult<Prisma.$PolicyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Policies.
     * @param {PolicyDeleteManyArgs} args - Arguments to filter Policies to delete.
     * @example
     * // Delete a few Policies
     * const { count } = await prisma.policy.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PolicyDeleteManyArgs>(args?: SelectSubset<T, PolicyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Policies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PolicyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Policies
     * const policy = await prisma.policy.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PolicyUpdateManyArgs>(args: SelectSubset<T, PolicyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Policies and returns the data updated in the database.
     * @param {PolicyUpdateManyAndReturnArgs} args - Arguments to update many Policies.
     * @example
     * // Update many Policies
     * const policy = await prisma.policy.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Policies and only return the `id`
     * const policyWithIdOnly = await prisma.policy.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PolicyUpdateManyAndReturnArgs>(args: SelectSubset<T, PolicyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PolicyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Policy.
     * @param {PolicyUpsertArgs} args - Arguments to update or create a Policy.
     * @example
     * // Update or create a Policy
     * const policy = await prisma.policy.upsert({
     *   create: {
     *     // ... data to create a Policy
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Policy we want to update
     *   }
     * })
     */
    upsert<T extends PolicyUpsertArgs>(args: SelectSubset<T, PolicyUpsertArgs<ExtArgs>>): Prisma__PolicyClient<$Result.GetResult<Prisma.$PolicyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Policies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PolicyCountArgs} args - Arguments to filter Policies to count.
     * @example
     * // Count the number of Policies
     * const count = await prisma.policy.count({
     *   where: {
     *     // ... the filter for the Policies we want to count
     *   }
     * })
    **/
    count<T extends PolicyCountArgs>(
      args?: Subset<T, PolicyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PolicyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Policy.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PolicyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PolicyAggregateArgs>(args: Subset<T, PolicyAggregateArgs>): Prisma.PrismaPromise<GetPolicyAggregateType<T>>

    /**
     * Group by Policy.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PolicyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PolicyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PolicyGroupByArgs['orderBy'] }
        : { orderBy?: PolicyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PolicyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPolicyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Policy model
   */
  readonly fields: PolicyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Policy.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PolicyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    rules<T extends Policy$rulesArgs<ExtArgs> = {}>(args?: Subset<T, Policy$rulesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PolicyRulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Token<T extends Policy$TokenArgs<ExtArgs> = {}>(args?: Subset<T, Policy$TokenArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Policy model
   */
  interface PolicyFieldRefs {
    readonly id: FieldRef<"Policy", 'Int'>
    readonly name: FieldRef<"Policy", 'String'>
    readonly createdAt: FieldRef<"Policy", 'DateTime'>
    readonly updatedAt: FieldRef<"Policy", 'DateTime'>
    readonly expiresAt: FieldRef<"Policy", 'DateTime'>
    readonly deletedAt: FieldRef<"Policy", 'DateTime'>
    readonly description: FieldRef<"Policy", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Policy findUnique
   */
  export type PolicyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Policy
     */
    select?: PolicySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Policy
     */
    omit?: PolicyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PolicyInclude<ExtArgs> | null
    /**
     * Filter, which Policy to fetch.
     */
    where: PolicyWhereUniqueInput
  }

  /**
   * Policy findUniqueOrThrow
   */
  export type PolicyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Policy
     */
    select?: PolicySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Policy
     */
    omit?: PolicyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PolicyInclude<ExtArgs> | null
    /**
     * Filter, which Policy to fetch.
     */
    where: PolicyWhereUniqueInput
  }

  /**
   * Policy findFirst
   */
  export type PolicyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Policy
     */
    select?: PolicySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Policy
     */
    omit?: PolicyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PolicyInclude<ExtArgs> | null
    /**
     * Filter, which Policy to fetch.
     */
    where?: PolicyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Policies to fetch.
     */
    orderBy?: PolicyOrderByWithRelationInput | PolicyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Policies.
     */
    cursor?: PolicyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Policies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Policies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Policies.
     */
    distinct?: PolicyScalarFieldEnum | PolicyScalarFieldEnum[]
  }

  /**
   * Policy findFirstOrThrow
   */
  export type PolicyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Policy
     */
    select?: PolicySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Policy
     */
    omit?: PolicyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PolicyInclude<ExtArgs> | null
    /**
     * Filter, which Policy to fetch.
     */
    where?: PolicyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Policies to fetch.
     */
    orderBy?: PolicyOrderByWithRelationInput | PolicyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Policies.
     */
    cursor?: PolicyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Policies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Policies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Policies.
     */
    distinct?: PolicyScalarFieldEnum | PolicyScalarFieldEnum[]
  }

  /**
   * Policy findMany
   */
  export type PolicyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Policy
     */
    select?: PolicySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Policy
     */
    omit?: PolicyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PolicyInclude<ExtArgs> | null
    /**
     * Filter, which Policies to fetch.
     */
    where?: PolicyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Policies to fetch.
     */
    orderBy?: PolicyOrderByWithRelationInput | PolicyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Policies.
     */
    cursor?: PolicyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Policies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Policies.
     */
    skip?: number
    distinct?: PolicyScalarFieldEnum | PolicyScalarFieldEnum[]
  }

  /**
   * Policy create
   */
  export type PolicyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Policy
     */
    select?: PolicySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Policy
     */
    omit?: PolicyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PolicyInclude<ExtArgs> | null
    /**
     * The data needed to create a Policy.
     */
    data: XOR<PolicyCreateInput, PolicyUncheckedCreateInput>
  }

  /**
   * Policy createMany
   */
  export type PolicyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Policies.
     */
    data: PolicyCreateManyInput | PolicyCreateManyInput[]
  }

  /**
   * Policy createManyAndReturn
   */
  export type PolicyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Policy
     */
    select?: PolicySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Policy
     */
    omit?: PolicyOmit<ExtArgs> | null
    /**
     * The data used to create many Policies.
     */
    data: PolicyCreateManyInput | PolicyCreateManyInput[]
  }

  /**
   * Policy update
   */
  export type PolicyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Policy
     */
    select?: PolicySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Policy
     */
    omit?: PolicyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PolicyInclude<ExtArgs> | null
    /**
     * The data needed to update a Policy.
     */
    data: XOR<PolicyUpdateInput, PolicyUncheckedUpdateInput>
    /**
     * Choose, which Policy to update.
     */
    where: PolicyWhereUniqueInput
  }

  /**
   * Policy updateMany
   */
  export type PolicyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Policies.
     */
    data: XOR<PolicyUpdateManyMutationInput, PolicyUncheckedUpdateManyInput>
    /**
     * Filter which Policies to update
     */
    where?: PolicyWhereInput
    /**
     * Limit how many Policies to update.
     */
    limit?: number
  }

  /**
   * Policy updateManyAndReturn
   */
  export type PolicyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Policy
     */
    select?: PolicySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Policy
     */
    omit?: PolicyOmit<ExtArgs> | null
    /**
     * The data used to update Policies.
     */
    data: XOR<PolicyUpdateManyMutationInput, PolicyUncheckedUpdateManyInput>
    /**
     * Filter which Policies to update
     */
    where?: PolicyWhereInput
    /**
     * Limit how many Policies to update.
     */
    limit?: number
  }

  /**
   * Policy upsert
   */
  export type PolicyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Policy
     */
    select?: PolicySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Policy
     */
    omit?: PolicyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PolicyInclude<ExtArgs> | null
    /**
     * The filter to search for the Policy to update in case it exists.
     */
    where: PolicyWhereUniqueInput
    /**
     * In case the Policy found by the `where` argument doesn't exist, create a new Policy with this data.
     */
    create: XOR<PolicyCreateInput, PolicyUncheckedCreateInput>
    /**
     * In case the Policy was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PolicyUpdateInput, PolicyUncheckedUpdateInput>
  }

  /**
   * Policy delete
   */
  export type PolicyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Policy
     */
    select?: PolicySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Policy
     */
    omit?: PolicyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PolicyInclude<ExtArgs> | null
    /**
     * Filter which Policy to delete.
     */
    where: PolicyWhereUniqueInput
  }

  /**
   * Policy deleteMany
   */
  export type PolicyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Policies to delete
     */
    where?: PolicyWhereInput
    /**
     * Limit how many Policies to delete.
     */
    limit?: number
  }

  /**
   * Policy.rules
   */
  export type Policy$rulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PolicyRule
     */
    select?: PolicyRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PolicyRule
     */
    omit?: PolicyRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PolicyRuleInclude<ExtArgs> | null
    where?: PolicyRuleWhereInput
    orderBy?: PolicyRuleOrderByWithRelationInput | PolicyRuleOrderByWithRelationInput[]
    cursor?: PolicyRuleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PolicyRuleScalarFieldEnum | PolicyRuleScalarFieldEnum[]
  }

  /**
   * Policy.Token
   */
  export type Policy$TokenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    where?: TokenWhereInput
    orderBy?: TokenOrderByWithRelationInput | TokenOrderByWithRelationInput[]
    cursor?: TokenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TokenScalarFieldEnum | TokenScalarFieldEnum[]
  }

  /**
   * Policy without action
   */
  export type PolicyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Policy
     */
    select?: PolicySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Policy
     */
    omit?: PolicyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PolicyInclude<ExtArgs> | null
  }


  /**
   * Model PolicyRule
   */

  export type AggregatePolicyRule = {
    _count: PolicyRuleCountAggregateOutputType | null
    _avg: PolicyRuleAvgAggregateOutputType | null
    _sum: PolicyRuleSumAggregateOutputType | null
    _min: PolicyRuleMinAggregateOutputType | null
    _max: PolicyRuleMaxAggregateOutputType | null
  }

  export type PolicyRuleAvgAggregateOutputType = {
    id: number | null
    maxUsageCount: number | null
    currentUsageCount: number | null
    policyId: number | null
  }

  export type PolicyRuleSumAggregateOutputType = {
    id: number | null
    maxUsageCount: number | null
    currentUsageCount: number | null
    policyId: number | null
  }

  export type PolicyRuleMinAggregateOutputType = {
    id: number | null
    method: string | null
    kind: string | null
    maxUsageCount: number | null
    currentUsageCount: number | null
    policyId: number | null
  }

  export type PolicyRuleMaxAggregateOutputType = {
    id: number | null
    method: string | null
    kind: string | null
    maxUsageCount: number | null
    currentUsageCount: number | null
    policyId: number | null
  }

  export type PolicyRuleCountAggregateOutputType = {
    id: number
    method: number
    kind: number
    maxUsageCount: number
    currentUsageCount: number
    policyId: number
    _all: number
  }


  export type PolicyRuleAvgAggregateInputType = {
    id?: true
    maxUsageCount?: true
    currentUsageCount?: true
    policyId?: true
  }

  export type PolicyRuleSumAggregateInputType = {
    id?: true
    maxUsageCount?: true
    currentUsageCount?: true
    policyId?: true
  }

  export type PolicyRuleMinAggregateInputType = {
    id?: true
    method?: true
    kind?: true
    maxUsageCount?: true
    currentUsageCount?: true
    policyId?: true
  }

  export type PolicyRuleMaxAggregateInputType = {
    id?: true
    method?: true
    kind?: true
    maxUsageCount?: true
    currentUsageCount?: true
    policyId?: true
  }

  export type PolicyRuleCountAggregateInputType = {
    id?: true
    method?: true
    kind?: true
    maxUsageCount?: true
    currentUsageCount?: true
    policyId?: true
    _all?: true
  }

  export type PolicyRuleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PolicyRule to aggregate.
     */
    where?: PolicyRuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PolicyRules to fetch.
     */
    orderBy?: PolicyRuleOrderByWithRelationInput | PolicyRuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PolicyRuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PolicyRules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PolicyRules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PolicyRules
    **/
    _count?: true | PolicyRuleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PolicyRuleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PolicyRuleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PolicyRuleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PolicyRuleMaxAggregateInputType
  }

  export type GetPolicyRuleAggregateType<T extends PolicyRuleAggregateArgs> = {
        [P in keyof T & keyof AggregatePolicyRule]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePolicyRule[P]>
      : GetScalarType<T[P], AggregatePolicyRule[P]>
  }




  export type PolicyRuleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PolicyRuleWhereInput
    orderBy?: PolicyRuleOrderByWithAggregationInput | PolicyRuleOrderByWithAggregationInput[]
    by: PolicyRuleScalarFieldEnum[] | PolicyRuleScalarFieldEnum
    having?: PolicyRuleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PolicyRuleCountAggregateInputType | true
    _avg?: PolicyRuleAvgAggregateInputType
    _sum?: PolicyRuleSumAggregateInputType
    _min?: PolicyRuleMinAggregateInputType
    _max?: PolicyRuleMaxAggregateInputType
  }

  export type PolicyRuleGroupByOutputType = {
    id: number
    method: string
    kind: string | null
    maxUsageCount: number | null
    currentUsageCount: number | null
    policyId: number | null
    _count: PolicyRuleCountAggregateOutputType | null
    _avg: PolicyRuleAvgAggregateOutputType | null
    _sum: PolicyRuleSumAggregateOutputType | null
    _min: PolicyRuleMinAggregateOutputType | null
    _max: PolicyRuleMaxAggregateOutputType | null
  }

  type GetPolicyRuleGroupByPayload<T extends PolicyRuleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PolicyRuleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PolicyRuleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PolicyRuleGroupByOutputType[P]>
            : GetScalarType<T[P], PolicyRuleGroupByOutputType[P]>
        }
      >
    >


  export type PolicyRuleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    method?: boolean
    kind?: boolean
    maxUsageCount?: boolean
    currentUsageCount?: boolean
    policyId?: boolean
    Policy?: boolean | PolicyRule$PolicyArgs<ExtArgs>
  }, ExtArgs["result"]["policyRule"]>

  export type PolicyRuleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    method?: boolean
    kind?: boolean
    maxUsageCount?: boolean
    currentUsageCount?: boolean
    policyId?: boolean
    Policy?: boolean | PolicyRule$PolicyArgs<ExtArgs>
  }, ExtArgs["result"]["policyRule"]>

  export type PolicyRuleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    method?: boolean
    kind?: boolean
    maxUsageCount?: boolean
    currentUsageCount?: boolean
    policyId?: boolean
    Policy?: boolean | PolicyRule$PolicyArgs<ExtArgs>
  }, ExtArgs["result"]["policyRule"]>

  export type PolicyRuleSelectScalar = {
    id?: boolean
    method?: boolean
    kind?: boolean
    maxUsageCount?: boolean
    currentUsageCount?: boolean
    policyId?: boolean
  }

  export type PolicyRuleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "method" | "kind" | "maxUsageCount" | "currentUsageCount" | "policyId", ExtArgs["result"]["policyRule"]>
  export type PolicyRuleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Policy?: boolean | PolicyRule$PolicyArgs<ExtArgs>
  }
  export type PolicyRuleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Policy?: boolean | PolicyRule$PolicyArgs<ExtArgs>
  }
  export type PolicyRuleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Policy?: boolean | PolicyRule$PolicyArgs<ExtArgs>
  }

  export type $PolicyRulePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PolicyRule"
    objects: {
      Policy: Prisma.$PolicyPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      method: string
      kind: string | null
      maxUsageCount: number | null
      currentUsageCount: number | null
      policyId: number | null
    }, ExtArgs["result"]["policyRule"]>
    composites: {}
  }

  type PolicyRuleGetPayload<S extends boolean | null | undefined | PolicyRuleDefaultArgs> = $Result.GetResult<Prisma.$PolicyRulePayload, S>

  type PolicyRuleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PolicyRuleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PolicyRuleCountAggregateInputType | true
    }

  export interface PolicyRuleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PolicyRule'], meta: { name: 'PolicyRule' } }
    /**
     * Find zero or one PolicyRule that matches the filter.
     * @param {PolicyRuleFindUniqueArgs} args - Arguments to find a PolicyRule
     * @example
     * // Get one PolicyRule
     * const policyRule = await prisma.policyRule.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PolicyRuleFindUniqueArgs>(args: SelectSubset<T, PolicyRuleFindUniqueArgs<ExtArgs>>): Prisma__PolicyRuleClient<$Result.GetResult<Prisma.$PolicyRulePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PolicyRule that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PolicyRuleFindUniqueOrThrowArgs} args - Arguments to find a PolicyRule
     * @example
     * // Get one PolicyRule
     * const policyRule = await prisma.policyRule.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PolicyRuleFindUniqueOrThrowArgs>(args: SelectSubset<T, PolicyRuleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PolicyRuleClient<$Result.GetResult<Prisma.$PolicyRulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PolicyRule that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PolicyRuleFindFirstArgs} args - Arguments to find a PolicyRule
     * @example
     * // Get one PolicyRule
     * const policyRule = await prisma.policyRule.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PolicyRuleFindFirstArgs>(args?: SelectSubset<T, PolicyRuleFindFirstArgs<ExtArgs>>): Prisma__PolicyRuleClient<$Result.GetResult<Prisma.$PolicyRulePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PolicyRule that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PolicyRuleFindFirstOrThrowArgs} args - Arguments to find a PolicyRule
     * @example
     * // Get one PolicyRule
     * const policyRule = await prisma.policyRule.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PolicyRuleFindFirstOrThrowArgs>(args?: SelectSubset<T, PolicyRuleFindFirstOrThrowArgs<ExtArgs>>): Prisma__PolicyRuleClient<$Result.GetResult<Prisma.$PolicyRulePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PolicyRules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PolicyRuleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PolicyRules
     * const policyRules = await prisma.policyRule.findMany()
     * 
     * // Get first 10 PolicyRules
     * const policyRules = await prisma.policyRule.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const policyRuleWithIdOnly = await prisma.policyRule.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PolicyRuleFindManyArgs>(args?: SelectSubset<T, PolicyRuleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PolicyRulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PolicyRule.
     * @param {PolicyRuleCreateArgs} args - Arguments to create a PolicyRule.
     * @example
     * // Create one PolicyRule
     * const PolicyRule = await prisma.policyRule.create({
     *   data: {
     *     // ... data to create a PolicyRule
     *   }
     * })
     * 
     */
    create<T extends PolicyRuleCreateArgs>(args: SelectSubset<T, PolicyRuleCreateArgs<ExtArgs>>): Prisma__PolicyRuleClient<$Result.GetResult<Prisma.$PolicyRulePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PolicyRules.
     * @param {PolicyRuleCreateManyArgs} args - Arguments to create many PolicyRules.
     * @example
     * // Create many PolicyRules
     * const policyRule = await prisma.policyRule.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PolicyRuleCreateManyArgs>(args?: SelectSubset<T, PolicyRuleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PolicyRules and returns the data saved in the database.
     * @param {PolicyRuleCreateManyAndReturnArgs} args - Arguments to create many PolicyRules.
     * @example
     * // Create many PolicyRules
     * const policyRule = await prisma.policyRule.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PolicyRules and only return the `id`
     * const policyRuleWithIdOnly = await prisma.policyRule.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PolicyRuleCreateManyAndReturnArgs>(args?: SelectSubset<T, PolicyRuleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PolicyRulePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PolicyRule.
     * @param {PolicyRuleDeleteArgs} args - Arguments to delete one PolicyRule.
     * @example
     * // Delete one PolicyRule
     * const PolicyRule = await prisma.policyRule.delete({
     *   where: {
     *     // ... filter to delete one PolicyRule
     *   }
     * })
     * 
     */
    delete<T extends PolicyRuleDeleteArgs>(args: SelectSubset<T, PolicyRuleDeleteArgs<ExtArgs>>): Prisma__PolicyRuleClient<$Result.GetResult<Prisma.$PolicyRulePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PolicyRule.
     * @param {PolicyRuleUpdateArgs} args - Arguments to update one PolicyRule.
     * @example
     * // Update one PolicyRule
     * const policyRule = await prisma.policyRule.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PolicyRuleUpdateArgs>(args: SelectSubset<T, PolicyRuleUpdateArgs<ExtArgs>>): Prisma__PolicyRuleClient<$Result.GetResult<Prisma.$PolicyRulePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PolicyRules.
     * @param {PolicyRuleDeleteManyArgs} args - Arguments to filter PolicyRules to delete.
     * @example
     * // Delete a few PolicyRules
     * const { count } = await prisma.policyRule.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PolicyRuleDeleteManyArgs>(args?: SelectSubset<T, PolicyRuleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PolicyRules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PolicyRuleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PolicyRules
     * const policyRule = await prisma.policyRule.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PolicyRuleUpdateManyArgs>(args: SelectSubset<T, PolicyRuleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PolicyRules and returns the data updated in the database.
     * @param {PolicyRuleUpdateManyAndReturnArgs} args - Arguments to update many PolicyRules.
     * @example
     * // Update many PolicyRules
     * const policyRule = await prisma.policyRule.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PolicyRules and only return the `id`
     * const policyRuleWithIdOnly = await prisma.policyRule.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PolicyRuleUpdateManyAndReturnArgs>(args: SelectSubset<T, PolicyRuleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PolicyRulePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PolicyRule.
     * @param {PolicyRuleUpsertArgs} args - Arguments to update or create a PolicyRule.
     * @example
     * // Update or create a PolicyRule
     * const policyRule = await prisma.policyRule.upsert({
     *   create: {
     *     // ... data to create a PolicyRule
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PolicyRule we want to update
     *   }
     * })
     */
    upsert<T extends PolicyRuleUpsertArgs>(args: SelectSubset<T, PolicyRuleUpsertArgs<ExtArgs>>): Prisma__PolicyRuleClient<$Result.GetResult<Prisma.$PolicyRulePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PolicyRules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PolicyRuleCountArgs} args - Arguments to filter PolicyRules to count.
     * @example
     * // Count the number of PolicyRules
     * const count = await prisma.policyRule.count({
     *   where: {
     *     // ... the filter for the PolicyRules we want to count
     *   }
     * })
    **/
    count<T extends PolicyRuleCountArgs>(
      args?: Subset<T, PolicyRuleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PolicyRuleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PolicyRule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PolicyRuleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PolicyRuleAggregateArgs>(args: Subset<T, PolicyRuleAggregateArgs>): Prisma.PrismaPromise<GetPolicyRuleAggregateType<T>>

    /**
     * Group by PolicyRule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PolicyRuleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PolicyRuleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PolicyRuleGroupByArgs['orderBy'] }
        : { orderBy?: PolicyRuleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PolicyRuleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPolicyRuleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PolicyRule model
   */
  readonly fields: PolicyRuleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PolicyRule.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PolicyRuleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Policy<T extends PolicyRule$PolicyArgs<ExtArgs> = {}>(args?: Subset<T, PolicyRule$PolicyArgs<ExtArgs>>): Prisma__PolicyClient<$Result.GetResult<Prisma.$PolicyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PolicyRule model
   */
  interface PolicyRuleFieldRefs {
    readonly id: FieldRef<"PolicyRule", 'Int'>
    readonly method: FieldRef<"PolicyRule", 'String'>
    readonly kind: FieldRef<"PolicyRule", 'String'>
    readonly maxUsageCount: FieldRef<"PolicyRule", 'Int'>
    readonly currentUsageCount: FieldRef<"PolicyRule", 'Int'>
    readonly policyId: FieldRef<"PolicyRule", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * PolicyRule findUnique
   */
  export type PolicyRuleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PolicyRule
     */
    select?: PolicyRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PolicyRule
     */
    omit?: PolicyRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PolicyRuleInclude<ExtArgs> | null
    /**
     * Filter, which PolicyRule to fetch.
     */
    where: PolicyRuleWhereUniqueInput
  }

  /**
   * PolicyRule findUniqueOrThrow
   */
  export type PolicyRuleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PolicyRule
     */
    select?: PolicyRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PolicyRule
     */
    omit?: PolicyRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PolicyRuleInclude<ExtArgs> | null
    /**
     * Filter, which PolicyRule to fetch.
     */
    where: PolicyRuleWhereUniqueInput
  }

  /**
   * PolicyRule findFirst
   */
  export type PolicyRuleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PolicyRule
     */
    select?: PolicyRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PolicyRule
     */
    omit?: PolicyRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PolicyRuleInclude<ExtArgs> | null
    /**
     * Filter, which PolicyRule to fetch.
     */
    where?: PolicyRuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PolicyRules to fetch.
     */
    orderBy?: PolicyRuleOrderByWithRelationInput | PolicyRuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PolicyRules.
     */
    cursor?: PolicyRuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PolicyRules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PolicyRules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PolicyRules.
     */
    distinct?: PolicyRuleScalarFieldEnum | PolicyRuleScalarFieldEnum[]
  }

  /**
   * PolicyRule findFirstOrThrow
   */
  export type PolicyRuleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PolicyRule
     */
    select?: PolicyRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PolicyRule
     */
    omit?: PolicyRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PolicyRuleInclude<ExtArgs> | null
    /**
     * Filter, which PolicyRule to fetch.
     */
    where?: PolicyRuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PolicyRules to fetch.
     */
    orderBy?: PolicyRuleOrderByWithRelationInput | PolicyRuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PolicyRules.
     */
    cursor?: PolicyRuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PolicyRules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PolicyRules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PolicyRules.
     */
    distinct?: PolicyRuleScalarFieldEnum | PolicyRuleScalarFieldEnum[]
  }

  /**
   * PolicyRule findMany
   */
  export type PolicyRuleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PolicyRule
     */
    select?: PolicyRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PolicyRule
     */
    omit?: PolicyRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PolicyRuleInclude<ExtArgs> | null
    /**
     * Filter, which PolicyRules to fetch.
     */
    where?: PolicyRuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PolicyRules to fetch.
     */
    orderBy?: PolicyRuleOrderByWithRelationInput | PolicyRuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PolicyRules.
     */
    cursor?: PolicyRuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PolicyRules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PolicyRules.
     */
    skip?: number
    distinct?: PolicyRuleScalarFieldEnum | PolicyRuleScalarFieldEnum[]
  }

  /**
   * PolicyRule create
   */
  export type PolicyRuleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PolicyRule
     */
    select?: PolicyRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PolicyRule
     */
    omit?: PolicyRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PolicyRuleInclude<ExtArgs> | null
    /**
     * The data needed to create a PolicyRule.
     */
    data: XOR<PolicyRuleCreateInput, PolicyRuleUncheckedCreateInput>
  }

  /**
   * PolicyRule createMany
   */
  export type PolicyRuleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PolicyRules.
     */
    data: PolicyRuleCreateManyInput | PolicyRuleCreateManyInput[]
  }

  /**
   * PolicyRule createManyAndReturn
   */
  export type PolicyRuleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PolicyRule
     */
    select?: PolicyRuleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PolicyRule
     */
    omit?: PolicyRuleOmit<ExtArgs> | null
    /**
     * The data used to create many PolicyRules.
     */
    data: PolicyRuleCreateManyInput | PolicyRuleCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PolicyRuleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PolicyRule update
   */
  export type PolicyRuleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PolicyRule
     */
    select?: PolicyRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PolicyRule
     */
    omit?: PolicyRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PolicyRuleInclude<ExtArgs> | null
    /**
     * The data needed to update a PolicyRule.
     */
    data: XOR<PolicyRuleUpdateInput, PolicyRuleUncheckedUpdateInput>
    /**
     * Choose, which PolicyRule to update.
     */
    where: PolicyRuleWhereUniqueInput
  }

  /**
   * PolicyRule updateMany
   */
  export type PolicyRuleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PolicyRules.
     */
    data: XOR<PolicyRuleUpdateManyMutationInput, PolicyRuleUncheckedUpdateManyInput>
    /**
     * Filter which PolicyRules to update
     */
    where?: PolicyRuleWhereInput
    /**
     * Limit how many PolicyRules to update.
     */
    limit?: number
  }

  /**
   * PolicyRule updateManyAndReturn
   */
  export type PolicyRuleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PolicyRule
     */
    select?: PolicyRuleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PolicyRule
     */
    omit?: PolicyRuleOmit<ExtArgs> | null
    /**
     * The data used to update PolicyRules.
     */
    data: XOR<PolicyRuleUpdateManyMutationInput, PolicyRuleUncheckedUpdateManyInput>
    /**
     * Filter which PolicyRules to update
     */
    where?: PolicyRuleWhereInput
    /**
     * Limit how many PolicyRules to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PolicyRuleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PolicyRule upsert
   */
  export type PolicyRuleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PolicyRule
     */
    select?: PolicyRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PolicyRule
     */
    omit?: PolicyRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PolicyRuleInclude<ExtArgs> | null
    /**
     * The filter to search for the PolicyRule to update in case it exists.
     */
    where: PolicyRuleWhereUniqueInput
    /**
     * In case the PolicyRule found by the `where` argument doesn't exist, create a new PolicyRule with this data.
     */
    create: XOR<PolicyRuleCreateInput, PolicyRuleUncheckedCreateInput>
    /**
     * In case the PolicyRule was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PolicyRuleUpdateInput, PolicyRuleUncheckedUpdateInput>
  }

  /**
   * PolicyRule delete
   */
  export type PolicyRuleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PolicyRule
     */
    select?: PolicyRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PolicyRule
     */
    omit?: PolicyRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PolicyRuleInclude<ExtArgs> | null
    /**
     * Filter which PolicyRule to delete.
     */
    where: PolicyRuleWhereUniqueInput
  }

  /**
   * PolicyRule deleteMany
   */
  export type PolicyRuleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PolicyRules to delete
     */
    where?: PolicyRuleWhereInput
    /**
     * Limit how many PolicyRules to delete.
     */
    limit?: number
  }

  /**
   * PolicyRule.Policy
   */
  export type PolicyRule$PolicyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Policy
     */
    select?: PolicySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Policy
     */
    omit?: PolicyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PolicyInclude<ExtArgs> | null
    where?: PolicyWhereInput
  }

  /**
   * PolicyRule without action
   */
  export type PolicyRuleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PolicyRule
     */
    select?: PolicyRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PolicyRule
     */
    omit?: PolicyRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PolicyRuleInclude<ExtArgs> | null
  }


  /**
   * Model Token
   */

  export type AggregateToken = {
    _count: TokenCountAggregateOutputType | null
    _avg: TokenAvgAggregateOutputType | null
    _sum: TokenSumAggregateOutputType | null
    _min: TokenMinAggregateOutputType | null
    _max: TokenMaxAggregateOutputType | null
  }

  export type TokenAvgAggregateOutputType = {
    id: number | null
    keyUserId: number | null
    policyId: number | null
  }

  export type TokenSumAggregateOutputType = {
    id: number | null
    keyUserId: number | null
    policyId: number | null
  }

  export type TokenMinAggregateOutputType = {
    id: number | null
    keyName: string | null
    token: string | null
    clientName: string | null
    createdBy: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    expiresAt: Date | null
    redeemedAt: Date | null
    keyUserId: number | null
    policyId: number | null
  }

  export type TokenMaxAggregateOutputType = {
    id: number | null
    keyName: string | null
    token: string | null
    clientName: string | null
    createdBy: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    expiresAt: Date | null
    redeemedAt: Date | null
    keyUserId: number | null
    policyId: number | null
  }

  export type TokenCountAggregateOutputType = {
    id: number
    keyName: number
    token: number
    clientName: number
    createdBy: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    expiresAt: number
    redeemedAt: number
    keyUserId: number
    policyId: number
    _all: number
  }


  export type TokenAvgAggregateInputType = {
    id?: true
    keyUserId?: true
    policyId?: true
  }

  export type TokenSumAggregateInputType = {
    id?: true
    keyUserId?: true
    policyId?: true
  }

  export type TokenMinAggregateInputType = {
    id?: true
    keyName?: true
    token?: true
    clientName?: true
    createdBy?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    expiresAt?: true
    redeemedAt?: true
    keyUserId?: true
    policyId?: true
  }

  export type TokenMaxAggregateInputType = {
    id?: true
    keyName?: true
    token?: true
    clientName?: true
    createdBy?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    expiresAt?: true
    redeemedAt?: true
    keyUserId?: true
    policyId?: true
  }

  export type TokenCountAggregateInputType = {
    id?: true
    keyName?: true
    token?: true
    clientName?: true
    createdBy?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    expiresAt?: true
    redeemedAt?: true
    keyUserId?: true
    policyId?: true
    _all?: true
  }

  export type TokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Token to aggregate.
     */
    where?: TokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     */
    orderBy?: TokenOrderByWithRelationInput | TokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tokens
    **/
    _count?: true | TokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TokenAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TokenSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TokenMaxAggregateInputType
  }

  export type GetTokenAggregateType<T extends TokenAggregateArgs> = {
        [P in keyof T & keyof AggregateToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateToken[P]>
      : GetScalarType<T[P], AggregateToken[P]>
  }




  export type TokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TokenWhereInput
    orderBy?: TokenOrderByWithAggregationInput | TokenOrderByWithAggregationInput[]
    by: TokenScalarFieldEnum[] | TokenScalarFieldEnum
    having?: TokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TokenCountAggregateInputType | true
    _avg?: TokenAvgAggregateInputType
    _sum?: TokenSumAggregateInputType
    _min?: TokenMinAggregateInputType
    _max?: TokenMaxAggregateInputType
  }

  export type TokenGroupByOutputType = {
    id: number
    keyName: string
    token: string
    clientName: string
    createdBy: string
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    expiresAt: Date | null
    redeemedAt: Date | null
    keyUserId: number | null
    policyId: number | null
    _count: TokenCountAggregateOutputType | null
    _avg: TokenAvgAggregateOutputType | null
    _sum: TokenSumAggregateOutputType | null
    _min: TokenMinAggregateOutputType | null
    _max: TokenMaxAggregateOutputType | null
  }

  type GetTokenGroupByPayload<T extends TokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TokenGroupByOutputType[P]>
            : GetScalarType<T[P], TokenGroupByOutputType[P]>
        }
      >
    >


  export type TokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    keyName?: boolean
    token?: boolean
    clientName?: boolean
    createdBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    expiresAt?: boolean
    redeemedAt?: boolean
    keyUserId?: boolean
    policyId?: boolean
    policy?: boolean | Token$policyArgs<ExtArgs>
    KeyUser?: boolean | Token$KeyUserArgs<ExtArgs>
  }, ExtArgs["result"]["token"]>

  export type TokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    keyName?: boolean
    token?: boolean
    clientName?: boolean
    createdBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    expiresAt?: boolean
    redeemedAt?: boolean
    keyUserId?: boolean
    policyId?: boolean
    policy?: boolean | Token$policyArgs<ExtArgs>
    KeyUser?: boolean | Token$KeyUserArgs<ExtArgs>
  }, ExtArgs["result"]["token"]>

  export type TokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    keyName?: boolean
    token?: boolean
    clientName?: boolean
    createdBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    expiresAt?: boolean
    redeemedAt?: boolean
    keyUserId?: boolean
    policyId?: boolean
    policy?: boolean | Token$policyArgs<ExtArgs>
    KeyUser?: boolean | Token$KeyUserArgs<ExtArgs>
  }, ExtArgs["result"]["token"]>

  export type TokenSelectScalar = {
    id?: boolean
    keyName?: boolean
    token?: boolean
    clientName?: boolean
    createdBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    expiresAt?: boolean
    redeemedAt?: boolean
    keyUserId?: boolean
    policyId?: boolean
  }

  export type TokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "keyName" | "token" | "clientName" | "createdBy" | "createdAt" | "updatedAt" | "deletedAt" | "expiresAt" | "redeemedAt" | "keyUserId" | "policyId", ExtArgs["result"]["token"]>
  export type TokenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    policy?: boolean | Token$policyArgs<ExtArgs>
    KeyUser?: boolean | Token$KeyUserArgs<ExtArgs>
  }
  export type TokenIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    policy?: boolean | Token$policyArgs<ExtArgs>
    KeyUser?: boolean | Token$KeyUserArgs<ExtArgs>
  }
  export type TokenIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    policy?: boolean | Token$policyArgs<ExtArgs>
    KeyUser?: boolean | Token$KeyUserArgs<ExtArgs>
  }

  export type $TokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Token"
    objects: {
      policy: Prisma.$PolicyPayload<ExtArgs> | null
      KeyUser: Prisma.$KeyUserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      keyName: string
      token: string
      clientName: string
      createdBy: string
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
      expiresAt: Date | null
      redeemedAt: Date | null
      keyUserId: number | null
      policyId: number | null
    }, ExtArgs["result"]["token"]>
    composites: {}
  }

  type TokenGetPayload<S extends boolean | null | undefined | TokenDefaultArgs> = $Result.GetResult<Prisma.$TokenPayload, S>

  type TokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TokenCountAggregateInputType | true
    }

  export interface TokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Token'], meta: { name: 'Token' } }
    /**
     * Find zero or one Token that matches the filter.
     * @param {TokenFindUniqueArgs} args - Arguments to find a Token
     * @example
     * // Get one Token
     * const token = await prisma.token.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TokenFindUniqueArgs>(args: SelectSubset<T, TokenFindUniqueArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Token that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TokenFindUniqueOrThrowArgs} args - Arguments to find a Token
     * @example
     * // Get one Token
     * const token = await prisma.token.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TokenFindUniqueOrThrowArgs>(args: SelectSubset<T, TokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Token that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenFindFirstArgs} args - Arguments to find a Token
     * @example
     * // Get one Token
     * const token = await prisma.token.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TokenFindFirstArgs>(args?: SelectSubset<T, TokenFindFirstArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Token that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenFindFirstOrThrowArgs} args - Arguments to find a Token
     * @example
     * // Get one Token
     * const token = await prisma.token.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TokenFindFirstOrThrowArgs>(args?: SelectSubset<T, TokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tokens
     * const tokens = await prisma.token.findMany()
     * 
     * // Get first 10 Tokens
     * const tokens = await prisma.token.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tokenWithIdOnly = await prisma.token.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TokenFindManyArgs>(args?: SelectSubset<T, TokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Token.
     * @param {TokenCreateArgs} args - Arguments to create a Token.
     * @example
     * // Create one Token
     * const Token = await prisma.token.create({
     *   data: {
     *     // ... data to create a Token
     *   }
     * })
     * 
     */
    create<T extends TokenCreateArgs>(args: SelectSubset<T, TokenCreateArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tokens.
     * @param {TokenCreateManyArgs} args - Arguments to create many Tokens.
     * @example
     * // Create many Tokens
     * const token = await prisma.token.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TokenCreateManyArgs>(args?: SelectSubset<T, TokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tokens and returns the data saved in the database.
     * @param {TokenCreateManyAndReturnArgs} args - Arguments to create many Tokens.
     * @example
     * // Create many Tokens
     * const token = await prisma.token.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tokens and only return the `id`
     * const tokenWithIdOnly = await prisma.token.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TokenCreateManyAndReturnArgs>(args?: SelectSubset<T, TokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Token.
     * @param {TokenDeleteArgs} args - Arguments to delete one Token.
     * @example
     * // Delete one Token
     * const Token = await prisma.token.delete({
     *   where: {
     *     // ... filter to delete one Token
     *   }
     * })
     * 
     */
    delete<T extends TokenDeleteArgs>(args: SelectSubset<T, TokenDeleteArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Token.
     * @param {TokenUpdateArgs} args - Arguments to update one Token.
     * @example
     * // Update one Token
     * const token = await prisma.token.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TokenUpdateArgs>(args: SelectSubset<T, TokenUpdateArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tokens.
     * @param {TokenDeleteManyArgs} args - Arguments to filter Tokens to delete.
     * @example
     * // Delete a few Tokens
     * const { count } = await prisma.token.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TokenDeleteManyArgs>(args?: SelectSubset<T, TokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tokens
     * const token = await prisma.token.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TokenUpdateManyArgs>(args: SelectSubset<T, TokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tokens and returns the data updated in the database.
     * @param {TokenUpdateManyAndReturnArgs} args - Arguments to update many Tokens.
     * @example
     * // Update many Tokens
     * const token = await prisma.token.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tokens and only return the `id`
     * const tokenWithIdOnly = await prisma.token.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TokenUpdateManyAndReturnArgs>(args: SelectSubset<T, TokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Token.
     * @param {TokenUpsertArgs} args - Arguments to update or create a Token.
     * @example
     * // Update or create a Token
     * const token = await prisma.token.upsert({
     *   create: {
     *     // ... data to create a Token
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Token we want to update
     *   }
     * })
     */
    upsert<T extends TokenUpsertArgs>(args: SelectSubset<T, TokenUpsertArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenCountArgs} args - Arguments to filter Tokens to count.
     * @example
     * // Count the number of Tokens
     * const count = await prisma.token.count({
     *   where: {
     *     // ... the filter for the Tokens we want to count
     *   }
     * })
    **/
    count<T extends TokenCountArgs>(
      args?: Subset<T, TokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Token.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TokenAggregateArgs>(args: Subset<T, TokenAggregateArgs>): Prisma.PrismaPromise<GetTokenAggregateType<T>>

    /**
     * Group by Token.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TokenGroupByArgs['orderBy'] }
        : { orderBy?: TokenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Token model
   */
  readonly fields: TokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Token.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    policy<T extends Token$policyArgs<ExtArgs> = {}>(args?: Subset<T, Token$policyArgs<ExtArgs>>): Prisma__PolicyClient<$Result.GetResult<Prisma.$PolicyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    KeyUser<T extends Token$KeyUserArgs<ExtArgs> = {}>(args?: Subset<T, Token$KeyUserArgs<ExtArgs>>): Prisma__KeyUserClient<$Result.GetResult<Prisma.$KeyUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Token model
   */
  interface TokenFieldRefs {
    readonly id: FieldRef<"Token", 'Int'>
    readonly keyName: FieldRef<"Token", 'String'>
    readonly token: FieldRef<"Token", 'String'>
    readonly clientName: FieldRef<"Token", 'String'>
    readonly createdBy: FieldRef<"Token", 'String'>
    readonly createdAt: FieldRef<"Token", 'DateTime'>
    readonly updatedAt: FieldRef<"Token", 'DateTime'>
    readonly deletedAt: FieldRef<"Token", 'DateTime'>
    readonly expiresAt: FieldRef<"Token", 'DateTime'>
    readonly redeemedAt: FieldRef<"Token", 'DateTime'>
    readonly keyUserId: FieldRef<"Token", 'Int'>
    readonly policyId: FieldRef<"Token", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Token findUnique
   */
  export type TokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * Filter, which Token to fetch.
     */
    where: TokenWhereUniqueInput
  }

  /**
   * Token findUniqueOrThrow
   */
  export type TokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * Filter, which Token to fetch.
     */
    where: TokenWhereUniqueInput
  }

  /**
   * Token findFirst
   */
  export type TokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * Filter, which Token to fetch.
     */
    where?: TokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     */
    orderBy?: TokenOrderByWithRelationInput | TokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tokens.
     */
    cursor?: TokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tokens.
     */
    distinct?: TokenScalarFieldEnum | TokenScalarFieldEnum[]
  }

  /**
   * Token findFirstOrThrow
   */
  export type TokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * Filter, which Token to fetch.
     */
    where?: TokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     */
    orderBy?: TokenOrderByWithRelationInput | TokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tokens.
     */
    cursor?: TokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tokens.
     */
    distinct?: TokenScalarFieldEnum | TokenScalarFieldEnum[]
  }

  /**
   * Token findMany
   */
  export type TokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * Filter, which Tokens to fetch.
     */
    where?: TokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     */
    orderBy?: TokenOrderByWithRelationInput | TokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tokens.
     */
    cursor?: TokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     */
    skip?: number
    distinct?: TokenScalarFieldEnum | TokenScalarFieldEnum[]
  }

  /**
   * Token create
   */
  export type TokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * The data needed to create a Token.
     */
    data: XOR<TokenCreateInput, TokenUncheckedCreateInput>
  }

  /**
   * Token createMany
   */
  export type TokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tokens.
     */
    data: TokenCreateManyInput | TokenCreateManyInput[]
  }

  /**
   * Token createManyAndReturn
   */
  export type TokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * The data used to create many Tokens.
     */
    data: TokenCreateManyInput | TokenCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Token update
   */
  export type TokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * The data needed to update a Token.
     */
    data: XOR<TokenUpdateInput, TokenUncheckedUpdateInput>
    /**
     * Choose, which Token to update.
     */
    where: TokenWhereUniqueInput
  }

  /**
   * Token updateMany
   */
  export type TokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tokens.
     */
    data: XOR<TokenUpdateManyMutationInput, TokenUncheckedUpdateManyInput>
    /**
     * Filter which Tokens to update
     */
    where?: TokenWhereInput
    /**
     * Limit how many Tokens to update.
     */
    limit?: number
  }

  /**
   * Token updateManyAndReturn
   */
  export type TokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * The data used to update Tokens.
     */
    data: XOR<TokenUpdateManyMutationInput, TokenUncheckedUpdateManyInput>
    /**
     * Filter which Tokens to update
     */
    where?: TokenWhereInput
    /**
     * Limit how many Tokens to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Token upsert
   */
  export type TokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * The filter to search for the Token to update in case it exists.
     */
    where: TokenWhereUniqueInput
    /**
     * In case the Token found by the `where` argument doesn't exist, create a new Token with this data.
     */
    create: XOR<TokenCreateInput, TokenUncheckedCreateInput>
    /**
     * In case the Token was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TokenUpdateInput, TokenUncheckedUpdateInput>
  }

  /**
   * Token delete
   */
  export type TokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * Filter which Token to delete.
     */
    where: TokenWhereUniqueInput
  }

  /**
   * Token deleteMany
   */
  export type TokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tokens to delete
     */
    where?: TokenWhereInput
    /**
     * Limit how many Tokens to delete.
     */
    limit?: number
  }

  /**
   * Token.policy
   */
  export type Token$policyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Policy
     */
    select?: PolicySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Policy
     */
    omit?: PolicyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PolicyInclude<ExtArgs> | null
    where?: PolicyWhereInput
  }

  /**
   * Token.KeyUser
   */
  export type Token$KeyUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KeyUser
     */
    select?: KeyUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KeyUser
     */
    omit?: KeyUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeyUserInclude<ExtArgs> | null
    where?: KeyUserWhereInput
  }

  /**
   * Token without action
   */
  export type TokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
  }


  /**
   * Model ConnectionToken
   */

  export type AggregateConnectionToken = {
    _count: ConnectionTokenCountAggregateOutputType | null
    _avg: ConnectionTokenAvgAggregateOutputType | null
    _sum: ConnectionTokenSumAggregateOutputType | null
    _min: ConnectionTokenMinAggregateOutputType | null
    _max: ConnectionTokenMaxAggregateOutputType | null
  }

  export type ConnectionTokenAvgAggregateOutputType = {
    id: number | null
  }

  export type ConnectionTokenSumAggregateOutputType = {
    id: number | null
  }

  export type ConnectionTokenMinAggregateOutputType = {
    id: number | null
    keyName: string | null
    token: string | null
    createdAt: Date | null
    expiresAt: Date | null
    redeemedAt: Date | null
  }

  export type ConnectionTokenMaxAggregateOutputType = {
    id: number | null
    keyName: string | null
    token: string | null
    createdAt: Date | null
    expiresAt: Date | null
    redeemedAt: Date | null
  }

  export type ConnectionTokenCountAggregateOutputType = {
    id: number
    keyName: number
    token: number
    createdAt: number
    expiresAt: number
    redeemedAt: number
    _all: number
  }


  export type ConnectionTokenAvgAggregateInputType = {
    id?: true
  }

  export type ConnectionTokenSumAggregateInputType = {
    id?: true
  }

  export type ConnectionTokenMinAggregateInputType = {
    id?: true
    keyName?: true
    token?: true
    createdAt?: true
    expiresAt?: true
    redeemedAt?: true
  }

  export type ConnectionTokenMaxAggregateInputType = {
    id?: true
    keyName?: true
    token?: true
    createdAt?: true
    expiresAt?: true
    redeemedAt?: true
  }

  export type ConnectionTokenCountAggregateInputType = {
    id?: true
    keyName?: true
    token?: true
    createdAt?: true
    expiresAt?: true
    redeemedAt?: true
    _all?: true
  }

  export type ConnectionTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ConnectionToken to aggregate.
     */
    where?: ConnectionTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConnectionTokens to fetch.
     */
    orderBy?: ConnectionTokenOrderByWithRelationInput | ConnectionTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ConnectionTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConnectionTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConnectionTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ConnectionTokens
    **/
    _count?: true | ConnectionTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ConnectionTokenAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ConnectionTokenSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConnectionTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConnectionTokenMaxAggregateInputType
  }

  export type GetConnectionTokenAggregateType<T extends ConnectionTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateConnectionToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConnectionToken[P]>
      : GetScalarType<T[P], AggregateConnectionToken[P]>
  }




  export type ConnectionTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConnectionTokenWhereInput
    orderBy?: ConnectionTokenOrderByWithAggregationInput | ConnectionTokenOrderByWithAggregationInput[]
    by: ConnectionTokenScalarFieldEnum[] | ConnectionTokenScalarFieldEnum
    having?: ConnectionTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConnectionTokenCountAggregateInputType | true
    _avg?: ConnectionTokenAvgAggregateInputType
    _sum?: ConnectionTokenSumAggregateInputType
    _min?: ConnectionTokenMinAggregateInputType
    _max?: ConnectionTokenMaxAggregateInputType
  }

  export type ConnectionTokenGroupByOutputType = {
    id: number
    keyName: string
    token: string
    createdAt: Date
    expiresAt: Date
    redeemedAt: Date | null
    _count: ConnectionTokenCountAggregateOutputType | null
    _avg: ConnectionTokenAvgAggregateOutputType | null
    _sum: ConnectionTokenSumAggregateOutputType | null
    _min: ConnectionTokenMinAggregateOutputType | null
    _max: ConnectionTokenMaxAggregateOutputType | null
  }

  type GetConnectionTokenGroupByPayload<T extends ConnectionTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConnectionTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConnectionTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConnectionTokenGroupByOutputType[P]>
            : GetScalarType<T[P], ConnectionTokenGroupByOutputType[P]>
        }
      >
    >


  export type ConnectionTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    keyName?: boolean
    token?: boolean
    createdAt?: boolean
    expiresAt?: boolean
    redeemedAt?: boolean
  }, ExtArgs["result"]["connectionToken"]>

  export type ConnectionTokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    keyName?: boolean
    token?: boolean
    createdAt?: boolean
    expiresAt?: boolean
    redeemedAt?: boolean
  }, ExtArgs["result"]["connectionToken"]>

  export type ConnectionTokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    keyName?: boolean
    token?: boolean
    createdAt?: boolean
    expiresAt?: boolean
    redeemedAt?: boolean
  }, ExtArgs["result"]["connectionToken"]>

  export type ConnectionTokenSelectScalar = {
    id?: boolean
    keyName?: boolean
    token?: boolean
    createdAt?: boolean
    expiresAt?: boolean
    redeemedAt?: boolean
  }

  export type ConnectionTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "keyName" | "token" | "createdAt" | "expiresAt" | "redeemedAt", ExtArgs["result"]["connectionToken"]>

  export type $ConnectionTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ConnectionToken"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      keyName: string
      token: string
      createdAt: Date
      expiresAt: Date
      redeemedAt: Date | null
    }, ExtArgs["result"]["connectionToken"]>
    composites: {}
  }

  type ConnectionTokenGetPayload<S extends boolean | null | undefined | ConnectionTokenDefaultArgs> = $Result.GetResult<Prisma.$ConnectionTokenPayload, S>

  type ConnectionTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ConnectionTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ConnectionTokenCountAggregateInputType | true
    }

  export interface ConnectionTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ConnectionToken'], meta: { name: 'ConnectionToken' } }
    /**
     * Find zero or one ConnectionToken that matches the filter.
     * @param {ConnectionTokenFindUniqueArgs} args - Arguments to find a ConnectionToken
     * @example
     * // Get one ConnectionToken
     * const connectionToken = await prisma.connectionToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ConnectionTokenFindUniqueArgs>(args: SelectSubset<T, ConnectionTokenFindUniqueArgs<ExtArgs>>): Prisma__ConnectionTokenClient<$Result.GetResult<Prisma.$ConnectionTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ConnectionToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ConnectionTokenFindUniqueOrThrowArgs} args - Arguments to find a ConnectionToken
     * @example
     * // Get one ConnectionToken
     * const connectionToken = await prisma.connectionToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ConnectionTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, ConnectionTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ConnectionTokenClient<$Result.GetResult<Prisma.$ConnectionTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ConnectionToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConnectionTokenFindFirstArgs} args - Arguments to find a ConnectionToken
     * @example
     * // Get one ConnectionToken
     * const connectionToken = await prisma.connectionToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ConnectionTokenFindFirstArgs>(args?: SelectSubset<T, ConnectionTokenFindFirstArgs<ExtArgs>>): Prisma__ConnectionTokenClient<$Result.GetResult<Prisma.$ConnectionTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ConnectionToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConnectionTokenFindFirstOrThrowArgs} args - Arguments to find a ConnectionToken
     * @example
     * // Get one ConnectionToken
     * const connectionToken = await prisma.connectionToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ConnectionTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, ConnectionTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__ConnectionTokenClient<$Result.GetResult<Prisma.$ConnectionTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ConnectionTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConnectionTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ConnectionTokens
     * const connectionTokens = await prisma.connectionToken.findMany()
     * 
     * // Get first 10 ConnectionTokens
     * const connectionTokens = await prisma.connectionToken.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const connectionTokenWithIdOnly = await prisma.connectionToken.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ConnectionTokenFindManyArgs>(args?: SelectSubset<T, ConnectionTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConnectionTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ConnectionToken.
     * @param {ConnectionTokenCreateArgs} args - Arguments to create a ConnectionToken.
     * @example
     * // Create one ConnectionToken
     * const ConnectionToken = await prisma.connectionToken.create({
     *   data: {
     *     // ... data to create a ConnectionToken
     *   }
     * })
     * 
     */
    create<T extends ConnectionTokenCreateArgs>(args: SelectSubset<T, ConnectionTokenCreateArgs<ExtArgs>>): Prisma__ConnectionTokenClient<$Result.GetResult<Prisma.$ConnectionTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ConnectionTokens.
     * @param {ConnectionTokenCreateManyArgs} args - Arguments to create many ConnectionTokens.
     * @example
     * // Create many ConnectionTokens
     * const connectionToken = await prisma.connectionToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ConnectionTokenCreateManyArgs>(args?: SelectSubset<T, ConnectionTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ConnectionTokens and returns the data saved in the database.
     * @param {ConnectionTokenCreateManyAndReturnArgs} args - Arguments to create many ConnectionTokens.
     * @example
     * // Create many ConnectionTokens
     * const connectionToken = await prisma.connectionToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ConnectionTokens and only return the `id`
     * const connectionTokenWithIdOnly = await prisma.connectionToken.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ConnectionTokenCreateManyAndReturnArgs>(args?: SelectSubset<T, ConnectionTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConnectionTokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ConnectionToken.
     * @param {ConnectionTokenDeleteArgs} args - Arguments to delete one ConnectionToken.
     * @example
     * // Delete one ConnectionToken
     * const ConnectionToken = await prisma.connectionToken.delete({
     *   where: {
     *     // ... filter to delete one ConnectionToken
     *   }
     * })
     * 
     */
    delete<T extends ConnectionTokenDeleteArgs>(args: SelectSubset<T, ConnectionTokenDeleteArgs<ExtArgs>>): Prisma__ConnectionTokenClient<$Result.GetResult<Prisma.$ConnectionTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ConnectionToken.
     * @param {ConnectionTokenUpdateArgs} args - Arguments to update one ConnectionToken.
     * @example
     * // Update one ConnectionToken
     * const connectionToken = await prisma.connectionToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ConnectionTokenUpdateArgs>(args: SelectSubset<T, ConnectionTokenUpdateArgs<ExtArgs>>): Prisma__ConnectionTokenClient<$Result.GetResult<Prisma.$ConnectionTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ConnectionTokens.
     * @param {ConnectionTokenDeleteManyArgs} args - Arguments to filter ConnectionTokens to delete.
     * @example
     * // Delete a few ConnectionTokens
     * const { count } = await prisma.connectionToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ConnectionTokenDeleteManyArgs>(args?: SelectSubset<T, ConnectionTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ConnectionTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConnectionTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ConnectionTokens
     * const connectionToken = await prisma.connectionToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ConnectionTokenUpdateManyArgs>(args: SelectSubset<T, ConnectionTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ConnectionTokens and returns the data updated in the database.
     * @param {ConnectionTokenUpdateManyAndReturnArgs} args - Arguments to update many ConnectionTokens.
     * @example
     * // Update many ConnectionTokens
     * const connectionToken = await prisma.connectionToken.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ConnectionTokens and only return the `id`
     * const connectionTokenWithIdOnly = await prisma.connectionToken.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ConnectionTokenUpdateManyAndReturnArgs>(args: SelectSubset<T, ConnectionTokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConnectionTokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ConnectionToken.
     * @param {ConnectionTokenUpsertArgs} args - Arguments to update or create a ConnectionToken.
     * @example
     * // Update or create a ConnectionToken
     * const connectionToken = await prisma.connectionToken.upsert({
     *   create: {
     *     // ... data to create a ConnectionToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ConnectionToken we want to update
     *   }
     * })
     */
    upsert<T extends ConnectionTokenUpsertArgs>(args: SelectSubset<T, ConnectionTokenUpsertArgs<ExtArgs>>): Prisma__ConnectionTokenClient<$Result.GetResult<Prisma.$ConnectionTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ConnectionTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConnectionTokenCountArgs} args - Arguments to filter ConnectionTokens to count.
     * @example
     * // Count the number of ConnectionTokens
     * const count = await prisma.connectionToken.count({
     *   where: {
     *     // ... the filter for the ConnectionTokens we want to count
     *   }
     * })
    **/
    count<T extends ConnectionTokenCountArgs>(
      args?: Subset<T, ConnectionTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConnectionTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ConnectionToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConnectionTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ConnectionTokenAggregateArgs>(args: Subset<T, ConnectionTokenAggregateArgs>): Prisma.PrismaPromise<GetConnectionTokenAggregateType<T>>

    /**
     * Group by ConnectionToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConnectionTokenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ConnectionTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ConnectionTokenGroupByArgs['orderBy'] }
        : { orderBy?: ConnectionTokenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ConnectionTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConnectionTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ConnectionToken model
   */
  readonly fields: ConnectionTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ConnectionToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ConnectionTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ConnectionToken model
   */
  interface ConnectionTokenFieldRefs {
    readonly id: FieldRef<"ConnectionToken", 'Int'>
    readonly keyName: FieldRef<"ConnectionToken", 'String'>
    readonly token: FieldRef<"ConnectionToken", 'String'>
    readonly createdAt: FieldRef<"ConnectionToken", 'DateTime'>
    readonly expiresAt: FieldRef<"ConnectionToken", 'DateTime'>
    readonly redeemedAt: FieldRef<"ConnectionToken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ConnectionToken findUnique
   */
  export type ConnectionTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConnectionToken
     */
    select?: ConnectionTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConnectionToken
     */
    omit?: ConnectionTokenOmit<ExtArgs> | null
    /**
     * Filter, which ConnectionToken to fetch.
     */
    where: ConnectionTokenWhereUniqueInput
  }

  /**
   * ConnectionToken findUniqueOrThrow
   */
  export type ConnectionTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConnectionToken
     */
    select?: ConnectionTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConnectionToken
     */
    omit?: ConnectionTokenOmit<ExtArgs> | null
    /**
     * Filter, which ConnectionToken to fetch.
     */
    where: ConnectionTokenWhereUniqueInput
  }

  /**
   * ConnectionToken findFirst
   */
  export type ConnectionTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConnectionToken
     */
    select?: ConnectionTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConnectionToken
     */
    omit?: ConnectionTokenOmit<ExtArgs> | null
    /**
     * Filter, which ConnectionToken to fetch.
     */
    where?: ConnectionTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConnectionTokens to fetch.
     */
    orderBy?: ConnectionTokenOrderByWithRelationInput | ConnectionTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ConnectionTokens.
     */
    cursor?: ConnectionTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConnectionTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConnectionTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ConnectionTokens.
     */
    distinct?: ConnectionTokenScalarFieldEnum | ConnectionTokenScalarFieldEnum[]
  }

  /**
   * ConnectionToken findFirstOrThrow
   */
  export type ConnectionTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConnectionToken
     */
    select?: ConnectionTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConnectionToken
     */
    omit?: ConnectionTokenOmit<ExtArgs> | null
    /**
     * Filter, which ConnectionToken to fetch.
     */
    where?: ConnectionTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConnectionTokens to fetch.
     */
    orderBy?: ConnectionTokenOrderByWithRelationInput | ConnectionTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ConnectionTokens.
     */
    cursor?: ConnectionTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConnectionTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConnectionTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ConnectionTokens.
     */
    distinct?: ConnectionTokenScalarFieldEnum | ConnectionTokenScalarFieldEnum[]
  }

  /**
   * ConnectionToken findMany
   */
  export type ConnectionTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConnectionToken
     */
    select?: ConnectionTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConnectionToken
     */
    omit?: ConnectionTokenOmit<ExtArgs> | null
    /**
     * Filter, which ConnectionTokens to fetch.
     */
    where?: ConnectionTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConnectionTokens to fetch.
     */
    orderBy?: ConnectionTokenOrderByWithRelationInput | ConnectionTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ConnectionTokens.
     */
    cursor?: ConnectionTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConnectionTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConnectionTokens.
     */
    skip?: number
    distinct?: ConnectionTokenScalarFieldEnum | ConnectionTokenScalarFieldEnum[]
  }

  /**
   * ConnectionToken create
   */
  export type ConnectionTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConnectionToken
     */
    select?: ConnectionTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConnectionToken
     */
    omit?: ConnectionTokenOmit<ExtArgs> | null
    /**
     * The data needed to create a ConnectionToken.
     */
    data: XOR<ConnectionTokenCreateInput, ConnectionTokenUncheckedCreateInput>
  }

  /**
   * ConnectionToken createMany
   */
  export type ConnectionTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ConnectionTokens.
     */
    data: ConnectionTokenCreateManyInput | ConnectionTokenCreateManyInput[]
  }

  /**
   * ConnectionToken createManyAndReturn
   */
  export type ConnectionTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConnectionToken
     */
    select?: ConnectionTokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ConnectionToken
     */
    omit?: ConnectionTokenOmit<ExtArgs> | null
    /**
     * The data used to create many ConnectionTokens.
     */
    data: ConnectionTokenCreateManyInput | ConnectionTokenCreateManyInput[]
  }

  /**
   * ConnectionToken update
   */
  export type ConnectionTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConnectionToken
     */
    select?: ConnectionTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConnectionToken
     */
    omit?: ConnectionTokenOmit<ExtArgs> | null
    /**
     * The data needed to update a ConnectionToken.
     */
    data: XOR<ConnectionTokenUpdateInput, ConnectionTokenUncheckedUpdateInput>
    /**
     * Choose, which ConnectionToken to update.
     */
    where: ConnectionTokenWhereUniqueInput
  }

  /**
   * ConnectionToken updateMany
   */
  export type ConnectionTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ConnectionTokens.
     */
    data: XOR<ConnectionTokenUpdateManyMutationInput, ConnectionTokenUncheckedUpdateManyInput>
    /**
     * Filter which ConnectionTokens to update
     */
    where?: ConnectionTokenWhereInput
    /**
     * Limit how many ConnectionTokens to update.
     */
    limit?: number
  }

  /**
   * ConnectionToken updateManyAndReturn
   */
  export type ConnectionTokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConnectionToken
     */
    select?: ConnectionTokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ConnectionToken
     */
    omit?: ConnectionTokenOmit<ExtArgs> | null
    /**
     * The data used to update ConnectionTokens.
     */
    data: XOR<ConnectionTokenUpdateManyMutationInput, ConnectionTokenUncheckedUpdateManyInput>
    /**
     * Filter which ConnectionTokens to update
     */
    where?: ConnectionTokenWhereInput
    /**
     * Limit how many ConnectionTokens to update.
     */
    limit?: number
  }

  /**
   * ConnectionToken upsert
   */
  export type ConnectionTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConnectionToken
     */
    select?: ConnectionTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConnectionToken
     */
    omit?: ConnectionTokenOmit<ExtArgs> | null
    /**
     * The filter to search for the ConnectionToken to update in case it exists.
     */
    where: ConnectionTokenWhereUniqueInput
    /**
     * In case the ConnectionToken found by the `where` argument doesn't exist, create a new ConnectionToken with this data.
     */
    create: XOR<ConnectionTokenCreateInput, ConnectionTokenUncheckedCreateInput>
    /**
     * In case the ConnectionToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ConnectionTokenUpdateInput, ConnectionTokenUncheckedUpdateInput>
  }

  /**
   * ConnectionToken delete
   */
  export type ConnectionTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConnectionToken
     */
    select?: ConnectionTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConnectionToken
     */
    omit?: ConnectionTokenOmit<ExtArgs> | null
    /**
     * Filter which ConnectionToken to delete.
     */
    where: ConnectionTokenWhereUniqueInput
  }

  /**
   * ConnectionToken deleteMany
   */
  export type ConnectionTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ConnectionTokens to delete
     */
    where?: ConnectionTokenWhereInput
    /**
     * Limit how many ConnectionTokens to delete.
     */
    limit?: number
  }

  /**
   * ConnectionToken without action
   */
  export type ConnectionTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConnectionToken
     */
    select?: ConnectionTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConnectionToken
     */
    omit?: ConnectionTokenOmit<ExtArgs> | null
  }


  /**
   * Model AdminLog
   */

  export type AggregateAdminLog = {
    _count: AdminLogCountAggregateOutputType | null
    _avg: AdminLogAvgAggregateOutputType | null
    _sum: AdminLogSumAggregateOutputType | null
    _min: AdminLogMinAggregateOutputType | null
    _max: AdminLogMaxAggregateOutputType | null
  }

  export type AdminLogAvgAggregateOutputType = {
    id: number | null
    appId: number | null
  }

  export type AdminLogSumAggregateOutputType = {
    id: number | null
    appId: number | null
  }

  export type AdminLogMinAggregateOutputType = {
    id: number | null
    timestamp: Date | null
    eventType: string | null
    keyName: string | null
    appId: number | null
    appName: string | null
    clientName: string | null
    clientVersion: string | null
    ipAddress: string | null
    command: string | null
    commandResult: string | null
  }

  export type AdminLogMaxAggregateOutputType = {
    id: number | null
    timestamp: Date | null
    eventType: string | null
    keyName: string | null
    appId: number | null
    appName: string | null
    clientName: string | null
    clientVersion: string | null
    ipAddress: string | null
    command: string | null
    commandResult: string | null
  }

  export type AdminLogCountAggregateOutputType = {
    id: number
    timestamp: number
    eventType: number
    keyName: number
    appId: number
    appName: number
    clientName: number
    clientVersion: number
    ipAddress: number
    command: number
    commandResult: number
    _all: number
  }


  export type AdminLogAvgAggregateInputType = {
    id?: true
    appId?: true
  }

  export type AdminLogSumAggregateInputType = {
    id?: true
    appId?: true
  }

  export type AdminLogMinAggregateInputType = {
    id?: true
    timestamp?: true
    eventType?: true
    keyName?: true
    appId?: true
    appName?: true
    clientName?: true
    clientVersion?: true
    ipAddress?: true
    command?: true
    commandResult?: true
  }

  export type AdminLogMaxAggregateInputType = {
    id?: true
    timestamp?: true
    eventType?: true
    keyName?: true
    appId?: true
    appName?: true
    clientName?: true
    clientVersion?: true
    ipAddress?: true
    command?: true
    commandResult?: true
  }

  export type AdminLogCountAggregateInputType = {
    id?: true
    timestamp?: true
    eventType?: true
    keyName?: true
    appId?: true
    appName?: true
    clientName?: true
    clientVersion?: true
    ipAddress?: true
    command?: true
    commandResult?: true
    _all?: true
  }

  export type AdminLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AdminLog to aggregate.
     */
    where?: AdminLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminLogs to fetch.
     */
    orderBy?: AdminLogOrderByWithRelationInput | AdminLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdminLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AdminLogs
    **/
    _count?: true | AdminLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AdminLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AdminLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminLogMaxAggregateInputType
  }

  export type GetAdminLogAggregateType<T extends AdminLogAggregateArgs> = {
        [P in keyof T & keyof AggregateAdminLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdminLog[P]>
      : GetScalarType<T[P], AggregateAdminLog[P]>
  }




  export type AdminLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminLogWhereInput
    orderBy?: AdminLogOrderByWithAggregationInput | AdminLogOrderByWithAggregationInput[]
    by: AdminLogScalarFieldEnum[] | AdminLogScalarFieldEnum
    having?: AdminLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminLogCountAggregateInputType | true
    _avg?: AdminLogAvgAggregateInputType
    _sum?: AdminLogSumAggregateInputType
    _min?: AdminLogMinAggregateInputType
    _max?: AdminLogMaxAggregateInputType
  }

  export type AdminLogGroupByOutputType = {
    id: number
    timestamp: Date
    eventType: string
    keyName: string | null
    appId: number | null
    appName: string | null
    clientName: string | null
    clientVersion: string | null
    ipAddress: string | null
    command: string | null
    commandResult: string | null
    _count: AdminLogCountAggregateOutputType | null
    _avg: AdminLogAvgAggregateOutputType | null
    _sum: AdminLogSumAggregateOutputType | null
    _min: AdminLogMinAggregateOutputType | null
    _max: AdminLogMaxAggregateOutputType | null
  }

  type GetAdminLogGroupByPayload<T extends AdminLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminLogGroupByOutputType[P]>
            : GetScalarType<T[P], AdminLogGroupByOutputType[P]>
        }
      >
    >


  export type AdminLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    timestamp?: boolean
    eventType?: boolean
    keyName?: boolean
    appId?: boolean
    appName?: boolean
    clientName?: boolean
    clientVersion?: boolean
    ipAddress?: boolean
    command?: boolean
    commandResult?: boolean
  }, ExtArgs["result"]["adminLog"]>

  export type AdminLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    timestamp?: boolean
    eventType?: boolean
    keyName?: boolean
    appId?: boolean
    appName?: boolean
    clientName?: boolean
    clientVersion?: boolean
    ipAddress?: boolean
    command?: boolean
    commandResult?: boolean
  }, ExtArgs["result"]["adminLog"]>

  export type AdminLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    timestamp?: boolean
    eventType?: boolean
    keyName?: boolean
    appId?: boolean
    appName?: boolean
    clientName?: boolean
    clientVersion?: boolean
    ipAddress?: boolean
    command?: boolean
    commandResult?: boolean
  }, ExtArgs["result"]["adminLog"]>

  export type AdminLogSelectScalar = {
    id?: boolean
    timestamp?: boolean
    eventType?: boolean
    keyName?: boolean
    appId?: boolean
    appName?: boolean
    clientName?: boolean
    clientVersion?: boolean
    ipAddress?: boolean
    command?: boolean
    commandResult?: boolean
  }

  export type AdminLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "timestamp" | "eventType" | "keyName" | "appId" | "appName" | "clientName" | "clientVersion" | "ipAddress" | "command" | "commandResult", ExtArgs["result"]["adminLog"]>

  export type $AdminLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AdminLog"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      timestamp: Date
      eventType: string
      keyName: string | null
      appId: number | null
      appName: string | null
      clientName: string | null
      clientVersion: string | null
      ipAddress: string | null
      command: string | null
      commandResult: string | null
    }, ExtArgs["result"]["adminLog"]>
    composites: {}
  }

  type AdminLogGetPayload<S extends boolean | null | undefined | AdminLogDefaultArgs> = $Result.GetResult<Prisma.$AdminLogPayload, S>

  type AdminLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdminLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdminLogCountAggregateInputType | true
    }

  export interface AdminLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AdminLog'], meta: { name: 'AdminLog' } }
    /**
     * Find zero or one AdminLog that matches the filter.
     * @param {AdminLogFindUniqueArgs} args - Arguments to find a AdminLog
     * @example
     * // Get one AdminLog
     * const adminLog = await prisma.adminLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdminLogFindUniqueArgs>(args: SelectSubset<T, AdminLogFindUniqueArgs<ExtArgs>>): Prisma__AdminLogClient<$Result.GetResult<Prisma.$AdminLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AdminLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdminLogFindUniqueOrThrowArgs} args - Arguments to find a AdminLog
     * @example
     * // Get one AdminLog
     * const adminLog = await prisma.adminLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdminLogFindUniqueOrThrowArgs>(args: SelectSubset<T, AdminLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdminLogClient<$Result.GetResult<Prisma.$AdminLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AdminLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminLogFindFirstArgs} args - Arguments to find a AdminLog
     * @example
     * // Get one AdminLog
     * const adminLog = await prisma.adminLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdminLogFindFirstArgs>(args?: SelectSubset<T, AdminLogFindFirstArgs<ExtArgs>>): Prisma__AdminLogClient<$Result.GetResult<Prisma.$AdminLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AdminLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminLogFindFirstOrThrowArgs} args - Arguments to find a AdminLog
     * @example
     * // Get one AdminLog
     * const adminLog = await prisma.adminLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdminLogFindFirstOrThrowArgs>(args?: SelectSubset<T, AdminLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdminLogClient<$Result.GetResult<Prisma.$AdminLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AdminLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AdminLogs
     * const adminLogs = await prisma.adminLog.findMany()
     * 
     * // Get first 10 AdminLogs
     * const adminLogs = await prisma.adminLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminLogWithIdOnly = await prisma.adminLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdminLogFindManyArgs>(args?: SelectSubset<T, AdminLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AdminLog.
     * @param {AdminLogCreateArgs} args - Arguments to create a AdminLog.
     * @example
     * // Create one AdminLog
     * const AdminLog = await prisma.adminLog.create({
     *   data: {
     *     // ... data to create a AdminLog
     *   }
     * })
     * 
     */
    create<T extends AdminLogCreateArgs>(args: SelectSubset<T, AdminLogCreateArgs<ExtArgs>>): Prisma__AdminLogClient<$Result.GetResult<Prisma.$AdminLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AdminLogs.
     * @param {AdminLogCreateManyArgs} args - Arguments to create many AdminLogs.
     * @example
     * // Create many AdminLogs
     * const adminLog = await prisma.adminLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdminLogCreateManyArgs>(args?: SelectSubset<T, AdminLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AdminLogs and returns the data saved in the database.
     * @param {AdminLogCreateManyAndReturnArgs} args - Arguments to create many AdminLogs.
     * @example
     * // Create many AdminLogs
     * const adminLog = await prisma.adminLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AdminLogs and only return the `id`
     * const adminLogWithIdOnly = await prisma.adminLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AdminLogCreateManyAndReturnArgs>(args?: SelectSubset<T, AdminLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AdminLog.
     * @param {AdminLogDeleteArgs} args - Arguments to delete one AdminLog.
     * @example
     * // Delete one AdminLog
     * const AdminLog = await prisma.adminLog.delete({
     *   where: {
     *     // ... filter to delete one AdminLog
     *   }
     * })
     * 
     */
    delete<T extends AdminLogDeleteArgs>(args: SelectSubset<T, AdminLogDeleteArgs<ExtArgs>>): Prisma__AdminLogClient<$Result.GetResult<Prisma.$AdminLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AdminLog.
     * @param {AdminLogUpdateArgs} args - Arguments to update one AdminLog.
     * @example
     * // Update one AdminLog
     * const adminLog = await prisma.adminLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdminLogUpdateArgs>(args: SelectSubset<T, AdminLogUpdateArgs<ExtArgs>>): Prisma__AdminLogClient<$Result.GetResult<Prisma.$AdminLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AdminLogs.
     * @param {AdminLogDeleteManyArgs} args - Arguments to filter AdminLogs to delete.
     * @example
     * // Delete a few AdminLogs
     * const { count } = await prisma.adminLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdminLogDeleteManyArgs>(args?: SelectSubset<T, AdminLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AdminLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AdminLogs
     * const adminLog = await prisma.adminLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdminLogUpdateManyArgs>(args: SelectSubset<T, AdminLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AdminLogs and returns the data updated in the database.
     * @param {AdminLogUpdateManyAndReturnArgs} args - Arguments to update many AdminLogs.
     * @example
     * // Update many AdminLogs
     * const adminLog = await prisma.adminLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AdminLogs and only return the `id`
     * const adminLogWithIdOnly = await prisma.adminLog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AdminLogUpdateManyAndReturnArgs>(args: SelectSubset<T, AdminLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AdminLog.
     * @param {AdminLogUpsertArgs} args - Arguments to update or create a AdminLog.
     * @example
     * // Update or create a AdminLog
     * const adminLog = await prisma.adminLog.upsert({
     *   create: {
     *     // ... data to create a AdminLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AdminLog we want to update
     *   }
     * })
     */
    upsert<T extends AdminLogUpsertArgs>(args: SelectSubset<T, AdminLogUpsertArgs<ExtArgs>>): Prisma__AdminLogClient<$Result.GetResult<Prisma.$AdminLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AdminLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminLogCountArgs} args - Arguments to filter AdminLogs to count.
     * @example
     * // Count the number of AdminLogs
     * const count = await prisma.adminLog.count({
     *   where: {
     *     // ... the filter for the AdminLogs we want to count
     *   }
     * })
    **/
    count<T extends AdminLogCountArgs>(
      args?: Subset<T, AdminLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AdminLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AdminLogAggregateArgs>(args: Subset<T, AdminLogAggregateArgs>): Prisma.PrismaPromise<GetAdminLogAggregateType<T>>

    /**
     * Group by AdminLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AdminLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminLogGroupByArgs['orderBy'] }
        : { orderBy?: AdminLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AdminLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AdminLog model
   */
  readonly fields: AdminLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AdminLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdminLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AdminLog model
   */
  interface AdminLogFieldRefs {
    readonly id: FieldRef<"AdminLog", 'Int'>
    readonly timestamp: FieldRef<"AdminLog", 'DateTime'>
    readonly eventType: FieldRef<"AdminLog", 'String'>
    readonly keyName: FieldRef<"AdminLog", 'String'>
    readonly appId: FieldRef<"AdminLog", 'Int'>
    readonly appName: FieldRef<"AdminLog", 'String'>
    readonly clientName: FieldRef<"AdminLog", 'String'>
    readonly clientVersion: FieldRef<"AdminLog", 'String'>
    readonly ipAddress: FieldRef<"AdminLog", 'String'>
    readonly command: FieldRef<"AdminLog", 'String'>
    readonly commandResult: FieldRef<"AdminLog", 'String'>
  }
    

  // Custom InputTypes
  /**
   * AdminLog findUnique
   */
  export type AdminLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminLog
     */
    select?: AdminLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminLog
     */
    omit?: AdminLogOmit<ExtArgs> | null
    /**
     * Filter, which AdminLog to fetch.
     */
    where: AdminLogWhereUniqueInput
  }

  /**
   * AdminLog findUniqueOrThrow
   */
  export type AdminLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminLog
     */
    select?: AdminLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminLog
     */
    omit?: AdminLogOmit<ExtArgs> | null
    /**
     * Filter, which AdminLog to fetch.
     */
    where: AdminLogWhereUniqueInput
  }

  /**
   * AdminLog findFirst
   */
  export type AdminLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminLog
     */
    select?: AdminLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminLog
     */
    omit?: AdminLogOmit<ExtArgs> | null
    /**
     * Filter, which AdminLog to fetch.
     */
    where?: AdminLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminLogs to fetch.
     */
    orderBy?: AdminLogOrderByWithRelationInput | AdminLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AdminLogs.
     */
    cursor?: AdminLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdminLogs.
     */
    distinct?: AdminLogScalarFieldEnum | AdminLogScalarFieldEnum[]
  }

  /**
   * AdminLog findFirstOrThrow
   */
  export type AdminLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminLog
     */
    select?: AdminLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminLog
     */
    omit?: AdminLogOmit<ExtArgs> | null
    /**
     * Filter, which AdminLog to fetch.
     */
    where?: AdminLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminLogs to fetch.
     */
    orderBy?: AdminLogOrderByWithRelationInput | AdminLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AdminLogs.
     */
    cursor?: AdminLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdminLogs.
     */
    distinct?: AdminLogScalarFieldEnum | AdminLogScalarFieldEnum[]
  }

  /**
   * AdminLog findMany
   */
  export type AdminLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminLog
     */
    select?: AdminLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminLog
     */
    omit?: AdminLogOmit<ExtArgs> | null
    /**
     * Filter, which AdminLogs to fetch.
     */
    where?: AdminLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminLogs to fetch.
     */
    orderBy?: AdminLogOrderByWithRelationInput | AdminLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AdminLogs.
     */
    cursor?: AdminLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminLogs.
     */
    skip?: number
    distinct?: AdminLogScalarFieldEnum | AdminLogScalarFieldEnum[]
  }

  /**
   * AdminLog create
   */
  export type AdminLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminLog
     */
    select?: AdminLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminLog
     */
    omit?: AdminLogOmit<ExtArgs> | null
    /**
     * The data needed to create a AdminLog.
     */
    data: XOR<AdminLogCreateInput, AdminLogUncheckedCreateInput>
  }

  /**
   * AdminLog createMany
   */
  export type AdminLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AdminLogs.
     */
    data: AdminLogCreateManyInput | AdminLogCreateManyInput[]
  }

  /**
   * AdminLog createManyAndReturn
   */
  export type AdminLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminLog
     */
    select?: AdminLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AdminLog
     */
    omit?: AdminLogOmit<ExtArgs> | null
    /**
     * The data used to create many AdminLogs.
     */
    data: AdminLogCreateManyInput | AdminLogCreateManyInput[]
  }

  /**
   * AdminLog update
   */
  export type AdminLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminLog
     */
    select?: AdminLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminLog
     */
    omit?: AdminLogOmit<ExtArgs> | null
    /**
     * The data needed to update a AdminLog.
     */
    data: XOR<AdminLogUpdateInput, AdminLogUncheckedUpdateInput>
    /**
     * Choose, which AdminLog to update.
     */
    where: AdminLogWhereUniqueInput
  }

  /**
   * AdminLog updateMany
   */
  export type AdminLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AdminLogs.
     */
    data: XOR<AdminLogUpdateManyMutationInput, AdminLogUncheckedUpdateManyInput>
    /**
     * Filter which AdminLogs to update
     */
    where?: AdminLogWhereInput
    /**
     * Limit how many AdminLogs to update.
     */
    limit?: number
  }

  /**
   * AdminLog updateManyAndReturn
   */
  export type AdminLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminLog
     */
    select?: AdminLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AdminLog
     */
    omit?: AdminLogOmit<ExtArgs> | null
    /**
     * The data used to update AdminLogs.
     */
    data: XOR<AdminLogUpdateManyMutationInput, AdminLogUncheckedUpdateManyInput>
    /**
     * Filter which AdminLogs to update
     */
    where?: AdminLogWhereInput
    /**
     * Limit how many AdminLogs to update.
     */
    limit?: number
  }

  /**
   * AdminLog upsert
   */
  export type AdminLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminLog
     */
    select?: AdminLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminLog
     */
    omit?: AdminLogOmit<ExtArgs> | null
    /**
     * The filter to search for the AdminLog to update in case it exists.
     */
    where: AdminLogWhereUniqueInput
    /**
     * In case the AdminLog found by the `where` argument doesn't exist, create a new AdminLog with this data.
     */
    create: XOR<AdminLogCreateInput, AdminLogUncheckedCreateInput>
    /**
     * In case the AdminLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdminLogUpdateInput, AdminLogUncheckedUpdateInput>
  }

  /**
   * AdminLog delete
   */
  export type AdminLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminLog
     */
    select?: AdminLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminLog
     */
    omit?: AdminLogOmit<ExtArgs> | null
    /**
     * Filter which AdminLog to delete.
     */
    where: AdminLogWhereUniqueInput
  }

  /**
   * AdminLog deleteMany
   */
  export type AdminLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AdminLogs to delete
     */
    where?: AdminLogWhereInput
    /**
     * Limit how many AdminLogs to delete.
     */
    limit?: number
  }

  /**
   * AdminLog without action
   */
  export type AdminLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminLog
     */
    select?: AdminLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminLog
     */
    omit?: AdminLogOmit<ExtArgs> | null
  }


  /**
   * Model Setting
   */

  export type AggregateSetting = {
    _count: SettingCountAggregateOutputType | null
    _min: SettingMinAggregateOutputType | null
    _max: SettingMaxAggregateOutputType | null
  }

  export type SettingMinAggregateOutputType = {
    key: string | null
    value: string | null
  }

  export type SettingMaxAggregateOutputType = {
    key: string | null
    value: string | null
  }

  export type SettingCountAggregateOutputType = {
    key: number
    value: number
    _all: number
  }


  export type SettingMinAggregateInputType = {
    key?: true
    value?: true
  }

  export type SettingMaxAggregateInputType = {
    key?: true
    value?: true
  }

  export type SettingCountAggregateInputType = {
    key?: true
    value?: true
    _all?: true
  }

  export type SettingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Setting to aggregate.
     */
    where?: SettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Settings to fetch.
     */
    orderBy?: SettingOrderByWithRelationInput | SettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Settings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Settings
    **/
    _count?: true | SettingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SettingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SettingMaxAggregateInputType
  }

  export type GetSettingAggregateType<T extends SettingAggregateArgs> = {
        [P in keyof T & keyof AggregateSetting]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSetting[P]>
      : GetScalarType<T[P], AggregateSetting[P]>
  }




  export type SettingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SettingWhereInput
    orderBy?: SettingOrderByWithAggregationInput | SettingOrderByWithAggregationInput[]
    by: SettingScalarFieldEnum[] | SettingScalarFieldEnum
    having?: SettingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SettingCountAggregateInputType | true
    _min?: SettingMinAggregateInputType
    _max?: SettingMaxAggregateInputType
  }

  export type SettingGroupByOutputType = {
    key: string
    value: string
    _count: SettingCountAggregateOutputType | null
    _min: SettingMinAggregateOutputType | null
    _max: SettingMaxAggregateOutputType | null
  }

  type GetSettingGroupByPayload<T extends SettingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SettingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SettingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SettingGroupByOutputType[P]>
            : GetScalarType<T[P], SettingGroupByOutputType[P]>
        }
      >
    >


  export type SettingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    key?: boolean
    value?: boolean
  }, ExtArgs["result"]["setting"]>

  export type SettingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    key?: boolean
    value?: boolean
  }, ExtArgs["result"]["setting"]>

  export type SettingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    key?: boolean
    value?: boolean
  }, ExtArgs["result"]["setting"]>

  export type SettingSelectScalar = {
    key?: boolean
    value?: boolean
  }

  export type SettingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"key" | "value", ExtArgs["result"]["setting"]>

  export type $SettingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Setting"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      key: string
      value: string
    }, ExtArgs["result"]["setting"]>
    composites: {}
  }

  type SettingGetPayload<S extends boolean | null | undefined | SettingDefaultArgs> = $Result.GetResult<Prisma.$SettingPayload, S>

  type SettingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SettingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SettingCountAggregateInputType | true
    }

  export interface SettingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Setting'], meta: { name: 'Setting' } }
    /**
     * Find zero or one Setting that matches the filter.
     * @param {SettingFindUniqueArgs} args - Arguments to find a Setting
     * @example
     * // Get one Setting
     * const setting = await prisma.setting.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SettingFindUniqueArgs>(args: SelectSubset<T, SettingFindUniqueArgs<ExtArgs>>): Prisma__SettingClient<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Setting that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SettingFindUniqueOrThrowArgs} args - Arguments to find a Setting
     * @example
     * // Get one Setting
     * const setting = await prisma.setting.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SettingFindUniqueOrThrowArgs>(args: SelectSubset<T, SettingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SettingClient<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Setting that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingFindFirstArgs} args - Arguments to find a Setting
     * @example
     * // Get one Setting
     * const setting = await prisma.setting.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SettingFindFirstArgs>(args?: SelectSubset<T, SettingFindFirstArgs<ExtArgs>>): Prisma__SettingClient<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Setting that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingFindFirstOrThrowArgs} args - Arguments to find a Setting
     * @example
     * // Get one Setting
     * const setting = await prisma.setting.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SettingFindFirstOrThrowArgs>(args?: SelectSubset<T, SettingFindFirstOrThrowArgs<ExtArgs>>): Prisma__SettingClient<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Settings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Settings
     * const settings = await prisma.setting.findMany()
     * 
     * // Get first 10 Settings
     * const settings = await prisma.setting.findMany({ take: 10 })
     * 
     * // Only select the `key`
     * const settingWithKeyOnly = await prisma.setting.findMany({ select: { key: true } })
     * 
     */
    findMany<T extends SettingFindManyArgs>(args?: SelectSubset<T, SettingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Setting.
     * @param {SettingCreateArgs} args - Arguments to create a Setting.
     * @example
     * // Create one Setting
     * const Setting = await prisma.setting.create({
     *   data: {
     *     // ... data to create a Setting
     *   }
     * })
     * 
     */
    create<T extends SettingCreateArgs>(args: SelectSubset<T, SettingCreateArgs<ExtArgs>>): Prisma__SettingClient<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Settings.
     * @param {SettingCreateManyArgs} args - Arguments to create many Settings.
     * @example
     * // Create many Settings
     * const setting = await prisma.setting.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SettingCreateManyArgs>(args?: SelectSubset<T, SettingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Settings and returns the data saved in the database.
     * @param {SettingCreateManyAndReturnArgs} args - Arguments to create many Settings.
     * @example
     * // Create many Settings
     * const setting = await prisma.setting.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Settings and only return the `key`
     * const settingWithKeyOnly = await prisma.setting.createManyAndReturn({
     *   select: { key: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SettingCreateManyAndReturnArgs>(args?: SelectSubset<T, SettingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Setting.
     * @param {SettingDeleteArgs} args - Arguments to delete one Setting.
     * @example
     * // Delete one Setting
     * const Setting = await prisma.setting.delete({
     *   where: {
     *     // ... filter to delete one Setting
     *   }
     * })
     * 
     */
    delete<T extends SettingDeleteArgs>(args: SelectSubset<T, SettingDeleteArgs<ExtArgs>>): Prisma__SettingClient<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Setting.
     * @param {SettingUpdateArgs} args - Arguments to update one Setting.
     * @example
     * // Update one Setting
     * const setting = await prisma.setting.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SettingUpdateArgs>(args: SelectSubset<T, SettingUpdateArgs<ExtArgs>>): Prisma__SettingClient<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Settings.
     * @param {SettingDeleteManyArgs} args - Arguments to filter Settings to delete.
     * @example
     * // Delete a few Settings
     * const { count } = await prisma.setting.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SettingDeleteManyArgs>(args?: SelectSubset<T, SettingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Settings
     * const setting = await prisma.setting.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SettingUpdateManyArgs>(args: SelectSubset<T, SettingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Settings and returns the data updated in the database.
     * @param {SettingUpdateManyAndReturnArgs} args - Arguments to update many Settings.
     * @example
     * // Update many Settings
     * const setting = await prisma.setting.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Settings and only return the `key`
     * const settingWithKeyOnly = await prisma.setting.updateManyAndReturn({
     *   select: { key: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SettingUpdateManyAndReturnArgs>(args: SelectSubset<T, SettingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Setting.
     * @param {SettingUpsertArgs} args - Arguments to update or create a Setting.
     * @example
     * // Update or create a Setting
     * const setting = await prisma.setting.upsert({
     *   create: {
     *     // ... data to create a Setting
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Setting we want to update
     *   }
     * })
     */
    upsert<T extends SettingUpsertArgs>(args: SelectSubset<T, SettingUpsertArgs<ExtArgs>>): Prisma__SettingClient<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingCountArgs} args - Arguments to filter Settings to count.
     * @example
     * // Count the number of Settings
     * const count = await prisma.setting.count({
     *   where: {
     *     // ... the filter for the Settings we want to count
     *   }
     * })
    **/
    count<T extends SettingCountArgs>(
      args?: Subset<T, SettingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SettingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Setting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SettingAggregateArgs>(args: Subset<T, SettingAggregateArgs>): Prisma.PrismaPromise<GetSettingAggregateType<T>>

    /**
     * Group by Setting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SettingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SettingGroupByArgs['orderBy'] }
        : { orderBy?: SettingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SettingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSettingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Setting model
   */
  readonly fields: SettingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Setting.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SettingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Setting model
   */
  interface SettingFieldRefs {
    readonly key: FieldRef<"Setting", 'String'>
    readonly value: FieldRef<"Setting", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Setting findUnique
   */
  export type SettingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
    /**
     * Filter, which Setting to fetch.
     */
    where: SettingWhereUniqueInput
  }

  /**
   * Setting findUniqueOrThrow
   */
  export type SettingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
    /**
     * Filter, which Setting to fetch.
     */
    where: SettingWhereUniqueInput
  }

  /**
   * Setting findFirst
   */
  export type SettingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
    /**
     * Filter, which Setting to fetch.
     */
    where?: SettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Settings to fetch.
     */
    orderBy?: SettingOrderByWithRelationInput | SettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Settings.
     */
    cursor?: SettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Settings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Settings.
     */
    distinct?: SettingScalarFieldEnum | SettingScalarFieldEnum[]
  }

  /**
   * Setting findFirstOrThrow
   */
  export type SettingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
    /**
     * Filter, which Setting to fetch.
     */
    where?: SettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Settings to fetch.
     */
    orderBy?: SettingOrderByWithRelationInput | SettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Settings.
     */
    cursor?: SettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Settings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Settings.
     */
    distinct?: SettingScalarFieldEnum | SettingScalarFieldEnum[]
  }

  /**
   * Setting findMany
   */
  export type SettingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
    /**
     * Filter, which Settings to fetch.
     */
    where?: SettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Settings to fetch.
     */
    orderBy?: SettingOrderByWithRelationInput | SettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Settings.
     */
    cursor?: SettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Settings.
     */
    skip?: number
    distinct?: SettingScalarFieldEnum | SettingScalarFieldEnum[]
  }

  /**
   * Setting create
   */
  export type SettingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
    /**
     * The data needed to create a Setting.
     */
    data: XOR<SettingCreateInput, SettingUncheckedCreateInput>
  }

  /**
   * Setting createMany
   */
  export type SettingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Settings.
     */
    data: SettingCreateManyInput | SettingCreateManyInput[]
  }

  /**
   * Setting createManyAndReturn
   */
  export type SettingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
    /**
     * The data used to create many Settings.
     */
    data: SettingCreateManyInput | SettingCreateManyInput[]
  }

  /**
   * Setting update
   */
  export type SettingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
    /**
     * The data needed to update a Setting.
     */
    data: XOR<SettingUpdateInput, SettingUncheckedUpdateInput>
    /**
     * Choose, which Setting to update.
     */
    where: SettingWhereUniqueInput
  }

  /**
   * Setting updateMany
   */
  export type SettingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Settings.
     */
    data: XOR<SettingUpdateManyMutationInput, SettingUncheckedUpdateManyInput>
    /**
     * Filter which Settings to update
     */
    where?: SettingWhereInput
    /**
     * Limit how many Settings to update.
     */
    limit?: number
  }

  /**
   * Setting updateManyAndReturn
   */
  export type SettingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
    /**
     * The data used to update Settings.
     */
    data: XOR<SettingUpdateManyMutationInput, SettingUncheckedUpdateManyInput>
    /**
     * Filter which Settings to update
     */
    where?: SettingWhereInput
    /**
     * Limit how many Settings to update.
     */
    limit?: number
  }

  /**
   * Setting upsert
   */
  export type SettingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
    /**
     * The filter to search for the Setting to update in case it exists.
     */
    where: SettingWhereUniqueInput
    /**
     * In case the Setting found by the `where` argument doesn't exist, create a new Setting with this data.
     */
    create: XOR<SettingCreateInput, SettingUncheckedCreateInput>
    /**
     * In case the Setting was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SettingUpdateInput, SettingUncheckedUpdateInput>
  }

  /**
   * Setting delete
   */
  export type SettingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
    /**
     * Filter which Setting to delete.
     */
    where: SettingWhereUniqueInput
  }

  /**
   * Setting deleteMany
   */
  export type SettingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Settings to delete
     */
    where?: SettingWhereInput
    /**
     * Limit how many Settings to delete.
     */
    limit?: number
  }

  /**
   * Setting without action
   */
  export type SettingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const RequestScalarFieldEnum: {
    id: 'id',
    keyName: 'keyName',
    createdAt: 'createdAt',
    processedAt: 'processedAt',
    requestId: 'requestId',
    remotePubkey: 'remotePubkey',
    method: 'method',
    params: 'params',
    allowed: 'allowed',
    autoApproved: 'autoApproved',
    approvalType: 'approvalType',
    keyUserId: 'keyUserId'
  };

  export type RequestScalarFieldEnum = (typeof RequestScalarFieldEnum)[keyof typeof RequestScalarFieldEnum]


  export const KeyUserScalarFieldEnum: {
    id: 'id',
    keyName: 'keyName',
    userPubkey: 'userPubkey',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    revokedAt: 'revokedAt',
    suspendedAt: 'suspendedAt',
    suspendUntil: 'suspendUntil',
    lastUsedAt: 'lastUsedAt',
    description: 'description',
    trustLevel: 'trustLevel',
    nostrconnectRelays: 'nostrconnectRelays'
  };

  export type KeyUserScalarFieldEnum = (typeof KeyUserScalarFieldEnum)[keyof typeof KeyUserScalarFieldEnum]


  export const KeyScalarFieldEnum: {
    id: 'id',
    keyName: 'keyName',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt',
    pubkey: 'pubkey'
  };

  export type KeyScalarFieldEnum = (typeof KeyScalarFieldEnum)[keyof typeof KeyScalarFieldEnum]


  export const SigningConditionScalarFieldEnum: {
    id: 'id',
    method: 'method',
    kind: 'kind',
    content: 'content',
    keyUserKeyName: 'keyUserKeyName',
    allowed: 'allowed',
    keyUserId: 'keyUserId'
  };

  export type SigningConditionScalarFieldEnum = (typeof SigningConditionScalarFieldEnum)[keyof typeof SigningConditionScalarFieldEnum]


  export const LogScalarFieldEnum: {
    id: 'id',
    timestamp: 'timestamp',
    type: 'type',
    method: 'method',
    params: 'params',
    keyUserId: 'keyUserId',
    autoApproved: 'autoApproved',
    approvalType: 'approvalType',
    keyName: 'keyName',
    remotePubkey: 'remotePubkey'
  };

  export type LogScalarFieldEnum = (typeof LogScalarFieldEnum)[keyof typeof LogScalarFieldEnum]


  export const PolicyScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    expiresAt: 'expiresAt',
    deletedAt: 'deletedAt',
    description: 'description'
  };

  export type PolicyScalarFieldEnum = (typeof PolicyScalarFieldEnum)[keyof typeof PolicyScalarFieldEnum]


  export const PolicyRuleScalarFieldEnum: {
    id: 'id',
    method: 'method',
    kind: 'kind',
    maxUsageCount: 'maxUsageCount',
    currentUsageCount: 'currentUsageCount',
    policyId: 'policyId'
  };

  export type PolicyRuleScalarFieldEnum = (typeof PolicyRuleScalarFieldEnum)[keyof typeof PolicyRuleScalarFieldEnum]


  export const TokenScalarFieldEnum: {
    id: 'id',
    keyName: 'keyName',
    token: 'token',
    clientName: 'clientName',
    createdBy: 'createdBy',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt',
    expiresAt: 'expiresAt',
    redeemedAt: 'redeemedAt',
    keyUserId: 'keyUserId',
    policyId: 'policyId'
  };

  export type TokenScalarFieldEnum = (typeof TokenScalarFieldEnum)[keyof typeof TokenScalarFieldEnum]


  export const ConnectionTokenScalarFieldEnum: {
    id: 'id',
    keyName: 'keyName',
    token: 'token',
    createdAt: 'createdAt',
    expiresAt: 'expiresAt',
    redeemedAt: 'redeemedAt'
  };

  export type ConnectionTokenScalarFieldEnum = (typeof ConnectionTokenScalarFieldEnum)[keyof typeof ConnectionTokenScalarFieldEnum]


  export const AdminLogScalarFieldEnum: {
    id: 'id',
    timestamp: 'timestamp',
    eventType: 'eventType',
    keyName: 'keyName',
    appId: 'appId',
    appName: 'appName',
    clientName: 'clientName',
    clientVersion: 'clientVersion',
    ipAddress: 'ipAddress',
    command: 'command',
    commandResult: 'commandResult'
  };

  export type AdminLogScalarFieldEnum = (typeof AdminLogScalarFieldEnum)[keyof typeof AdminLogScalarFieldEnum]


  export const SettingScalarFieldEnum: {
    key: 'key',
    value: 'value'
  };

  export type SettingScalarFieldEnum = (typeof SettingScalarFieldEnum)[keyof typeof SettingScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type RequestWhereInput = {
    AND?: RequestWhereInput | RequestWhereInput[]
    OR?: RequestWhereInput[]
    NOT?: RequestWhereInput | RequestWhereInput[]
    id?: StringFilter<"Request"> | string
    keyName?: StringNullableFilter<"Request"> | string | null
    createdAt?: DateTimeFilter<"Request"> | Date | string
    processedAt?: DateTimeNullableFilter<"Request"> | Date | string | null
    requestId?: StringFilter<"Request"> | string
    remotePubkey?: StringFilter<"Request"> | string
    method?: StringFilter<"Request"> | string
    params?: StringNullableFilter<"Request"> | string | null
    allowed?: BoolNullableFilter<"Request"> | boolean | null
    autoApproved?: BoolFilter<"Request"> | boolean
    approvalType?: StringNullableFilter<"Request"> | string | null
    keyUserId?: IntNullableFilter<"Request"> | number | null
    KeyUser?: XOR<KeyUserNullableScalarRelationFilter, KeyUserWhereInput> | null
  }

  export type RequestOrderByWithRelationInput = {
    id?: SortOrder
    keyName?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    processedAt?: SortOrderInput | SortOrder
    requestId?: SortOrder
    remotePubkey?: SortOrder
    method?: SortOrder
    params?: SortOrderInput | SortOrder
    allowed?: SortOrderInput | SortOrder
    autoApproved?: SortOrder
    approvalType?: SortOrderInput | SortOrder
    keyUserId?: SortOrderInput | SortOrder
    KeyUser?: KeyUserOrderByWithRelationInput
  }

  export type RequestWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RequestWhereInput | RequestWhereInput[]
    OR?: RequestWhereInput[]
    NOT?: RequestWhereInput | RequestWhereInput[]
    keyName?: StringNullableFilter<"Request"> | string | null
    createdAt?: DateTimeFilter<"Request"> | Date | string
    processedAt?: DateTimeNullableFilter<"Request"> | Date | string | null
    requestId?: StringFilter<"Request"> | string
    remotePubkey?: StringFilter<"Request"> | string
    method?: StringFilter<"Request"> | string
    params?: StringNullableFilter<"Request"> | string | null
    allowed?: BoolNullableFilter<"Request"> | boolean | null
    autoApproved?: BoolFilter<"Request"> | boolean
    approvalType?: StringNullableFilter<"Request"> | string | null
    keyUserId?: IntNullableFilter<"Request"> | number | null
    KeyUser?: XOR<KeyUserNullableScalarRelationFilter, KeyUserWhereInput> | null
  }, "id">

  export type RequestOrderByWithAggregationInput = {
    id?: SortOrder
    keyName?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    processedAt?: SortOrderInput | SortOrder
    requestId?: SortOrder
    remotePubkey?: SortOrder
    method?: SortOrder
    params?: SortOrderInput | SortOrder
    allowed?: SortOrderInput | SortOrder
    autoApproved?: SortOrder
    approvalType?: SortOrderInput | SortOrder
    keyUserId?: SortOrderInput | SortOrder
    _count?: RequestCountOrderByAggregateInput
    _avg?: RequestAvgOrderByAggregateInput
    _max?: RequestMaxOrderByAggregateInput
    _min?: RequestMinOrderByAggregateInput
    _sum?: RequestSumOrderByAggregateInput
  }

  export type RequestScalarWhereWithAggregatesInput = {
    AND?: RequestScalarWhereWithAggregatesInput | RequestScalarWhereWithAggregatesInput[]
    OR?: RequestScalarWhereWithAggregatesInput[]
    NOT?: RequestScalarWhereWithAggregatesInput | RequestScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Request"> | string
    keyName?: StringNullableWithAggregatesFilter<"Request"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Request"> | Date | string
    processedAt?: DateTimeNullableWithAggregatesFilter<"Request"> | Date | string | null
    requestId?: StringWithAggregatesFilter<"Request"> | string
    remotePubkey?: StringWithAggregatesFilter<"Request"> | string
    method?: StringWithAggregatesFilter<"Request"> | string
    params?: StringNullableWithAggregatesFilter<"Request"> | string | null
    allowed?: BoolNullableWithAggregatesFilter<"Request"> | boolean | null
    autoApproved?: BoolWithAggregatesFilter<"Request"> | boolean
    approvalType?: StringNullableWithAggregatesFilter<"Request"> | string | null
    keyUserId?: IntNullableWithAggregatesFilter<"Request"> | number | null
  }

  export type KeyUserWhereInput = {
    AND?: KeyUserWhereInput | KeyUserWhereInput[]
    OR?: KeyUserWhereInput[]
    NOT?: KeyUserWhereInput | KeyUserWhereInput[]
    id?: IntFilter<"KeyUser"> | number
    keyName?: StringFilter<"KeyUser"> | string
    userPubkey?: StringFilter<"KeyUser"> | string
    createdAt?: DateTimeFilter<"KeyUser"> | Date | string
    updatedAt?: DateTimeFilter<"KeyUser"> | Date | string
    revokedAt?: DateTimeNullableFilter<"KeyUser"> | Date | string | null
    suspendedAt?: DateTimeNullableFilter<"KeyUser"> | Date | string | null
    suspendUntil?: DateTimeNullableFilter<"KeyUser"> | Date | string | null
    lastUsedAt?: DateTimeNullableFilter<"KeyUser"> | Date | string | null
    description?: StringNullableFilter<"KeyUser"> | string | null
    trustLevel?: StringFilter<"KeyUser"> | string
    nostrconnectRelays?: StringNullableFilter<"KeyUser"> | string | null
    logs?: LogListRelationFilter
    signingConditions?: SigningConditionListRelationFilter
    Token?: TokenListRelationFilter
    requests?: RequestListRelationFilter
  }

  export type KeyUserOrderByWithRelationInput = {
    id?: SortOrder
    keyName?: SortOrder
    userPubkey?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    revokedAt?: SortOrderInput | SortOrder
    suspendedAt?: SortOrderInput | SortOrder
    suspendUntil?: SortOrderInput | SortOrder
    lastUsedAt?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    trustLevel?: SortOrder
    nostrconnectRelays?: SortOrderInput | SortOrder
    logs?: LogOrderByRelationAggregateInput
    signingConditions?: SigningConditionOrderByRelationAggregateInput
    Token?: TokenOrderByRelationAggregateInput
    requests?: RequestOrderByRelationAggregateInput
  }

  export type KeyUserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    unique_key_user?: KeyUserUnique_key_userCompoundUniqueInput
    AND?: KeyUserWhereInput | KeyUserWhereInput[]
    OR?: KeyUserWhereInput[]
    NOT?: KeyUserWhereInput | KeyUserWhereInput[]
    keyName?: StringFilter<"KeyUser"> | string
    userPubkey?: StringFilter<"KeyUser"> | string
    createdAt?: DateTimeFilter<"KeyUser"> | Date | string
    updatedAt?: DateTimeFilter<"KeyUser"> | Date | string
    revokedAt?: DateTimeNullableFilter<"KeyUser"> | Date | string | null
    suspendedAt?: DateTimeNullableFilter<"KeyUser"> | Date | string | null
    suspendUntil?: DateTimeNullableFilter<"KeyUser"> | Date | string | null
    lastUsedAt?: DateTimeNullableFilter<"KeyUser"> | Date | string | null
    description?: StringNullableFilter<"KeyUser"> | string | null
    trustLevel?: StringFilter<"KeyUser"> | string
    nostrconnectRelays?: StringNullableFilter<"KeyUser"> | string | null
    logs?: LogListRelationFilter
    signingConditions?: SigningConditionListRelationFilter
    Token?: TokenListRelationFilter
    requests?: RequestListRelationFilter
  }, "id" | "unique_key_user">

  export type KeyUserOrderByWithAggregationInput = {
    id?: SortOrder
    keyName?: SortOrder
    userPubkey?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    revokedAt?: SortOrderInput | SortOrder
    suspendedAt?: SortOrderInput | SortOrder
    suspendUntil?: SortOrderInput | SortOrder
    lastUsedAt?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    trustLevel?: SortOrder
    nostrconnectRelays?: SortOrderInput | SortOrder
    _count?: KeyUserCountOrderByAggregateInput
    _avg?: KeyUserAvgOrderByAggregateInput
    _max?: KeyUserMaxOrderByAggregateInput
    _min?: KeyUserMinOrderByAggregateInput
    _sum?: KeyUserSumOrderByAggregateInput
  }

  export type KeyUserScalarWhereWithAggregatesInput = {
    AND?: KeyUserScalarWhereWithAggregatesInput | KeyUserScalarWhereWithAggregatesInput[]
    OR?: KeyUserScalarWhereWithAggregatesInput[]
    NOT?: KeyUserScalarWhereWithAggregatesInput | KeyUserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"KeyUser"> | number
    keyName?: StringWithAggregatesFilter<"KeyUser"> | string
    userPubkey?: StringWithAggregatesFilter<"KeyUser"> | string
    createdAt?: DateTimeWithAggregatesFilter<"KeyUser"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"KeyUser"> | Date | string
    revokedAt?: DateTimeNullableWithAggregatesFilter<"KeyUser"> | Date | string | null
    suspendedAt?: DateTimeNullableWithAggregatesFilter<"KeyUser"> | Date | string | null
    suspendUntil?: DateTimeNullableWithAggregatesFilter<"KeyUser"> | Date | string | null
    lastUsedAt?: DateTimeNullableWithAggregatesFilter<"KeyUser"> | Date | string | null
    description?: StringNullableWithAggregatesFilter<"KeyUser"> | string | null
    trustLevel?: StringWithAggregatesFilter<"KeyUser"> | string
    nostrconnectRelays?: StringNullableWithAggregatesFilter<"KeyUser"> | string | null
  }

  export type KeyWhereInput = {
    AND?: KeyWhereInput | KeyWhereInput[]
    OR?: KeyWhereInput[]
    NOT?: KeyWhereInput | KeyWhereInput[]
    id?: IntFilter<"Key"> | number
    keyName?: StringFilter<"Key"> | string
    createdAt?: DateTimeFilter<"Key"> | Date | string
    updatedAt?: DateTimeFilter<"Key"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Key"> | Date | string | null
    pubkey?: StringFilter<"Key"> | string
  }

  export type KeyOrderByWithRelationInput = {
    id?: SortOrder
    keyName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    pubkey?: SortOrder
  }

  export type KeyWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    keyName?: string
    AND?: KeyWhereInput | KeyWhereInput[]
    OR?: KeyWhereInput[]
    NOT?: KeyWhereInput | KeyWhereInput[]
    createdAt?: DateTimeFilter<"Key"> | Date | string
    updatedAt?: DateTimeFilter<"Key"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Key"> | Date | string | null
    pubkey?: StringFilter<"Key"> | string
  }, "id" | "keyName">

  export type KeyOrderByWithAggregationInput = {
    id?: SortOrder
    keyName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    pubkey?: SortOrder
    _count?: KeyCountOrderByAggregateInput
    _avg?: KeyAvgOrderByAggregateInput
    _max?: KeyMaxOrderByAggregateInput
    _min?: KeyMinOrderByAggregateInput
    _sum?: KeySumOrderByAggregateInput
  }

  export type KeyScalarWhereWithAggregatesInput = {
    AND?: KeyScalarWhereWithAggregatesInput | KeyScalarWhereWithAggregatesInput[]
    OR?: KeyScalarWhereWithAggregatesInput[]
    NOT?: KeyScalarWhereWithAggregatesInput | KeyScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Key"> | number
    keyName?: StringWithAggregatesFilter<"Key"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Key"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Key"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Key"> | Date | string | null
    pubkey?: StringWithAggregatesFilter<"Key"> | string
  }

  export type SigningConditionWhereInput = {
    AND?: SigningConditionWhereInput | SigningConditionWhereInput[]
    OR?: SigningConditionWhereInput[]
    NOT?: SigningConditionWhereInput | SigningConditionWhereInput[]
    id?: IntFilter<"SigningCondition"> | number
    method?: StringNullableFilter<"SigningCondition"> | string | null
    kind?: StringNullableFilter<"SigningCondition"> | string | null
    content?: StringNullableFilter<"SigningCondition"> | string | null
    keyUserKeyName?: StringNullableFilter<"SigningCondition"> | string | null
    allowed?: BoolNullableFilter<"SigningCondition"> | boolean | null
    keyUserId?: IntNullableFilter<"SigningCondition"> | number | null
    KeyUser?: XOR<KeyUserNullableScalarRelationFilter, KeyUserWhereInput> | null
  }

  export type SigningConditionOrderByWithRelationInput = {
    id?: SortOrder
    method?: SortOrderInput | SortOrder
    kind?: SortOrderInput | SortOrder
    content?: SortOrderInput | SortOrder
    keyUserKeyName?: SortOrderInput | SortOrder
    allowed?: SortOrderInput | SortOrder
    keyUserId?: SortOrderInput | SortOrder
    KeyUser?: KeyUserOrderByWithRelationInput
  }

  export type SigningConditionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SigningConditionWhereInput | SigningConditionWhereInput[]
    OR?: SigningConditionWhereInput[]
    NOT?: SigningConditionWhereInput | SigningConditionWhereInput[]
    method?: StringNullableFilter<"SigningCondition"> | string | null
    kind?: StringNullableFilter<"SigningCondition"> | string | null
    content?: StringNullableFilter<"SigningCondition"> | string | null
    keyUserKeyName?: StringNullableFilter<"SigningCondition"> | string | null
    allowed?: BoolNullableFilter<"SigningCondition"> | boolean | null
    keyUserId?: IntNullableFilter<"SigningCondition"> | number | null
    KeyUser?: XOR<KeyUserNullableScalarRelationFilter, KeyUserWhereInput> | null
  }, "id">

  export type SigningConditionOrderByWithAggregationInput = {
    id?: SortOrder
    method?: SortOrderInput | SortOrder
    kind?: SortOrderInput | SortOrder
    content?: SortOrderInput | SortOrder
    keyUserKeyName?: SortOrderInput | SortOrder
    allowed?: SortOrderInput | SortOrder
    keyUserId?: SortOrderInput | SortOrder
    _count?: SigningConditionCountOrderByAggregateInput
    _avg?: SigningConditionAvgOrderByAggregateInput
    _max?: SigningConditionMaxOrderByAggregateInput
    _min?: SigningConditionMinOrderByAggregateInput
    _sum?: SigningConditionSumOrderByAggregateInput
  }

  export type SigningConditionScalarWhereWithAggregatesInput = {
    AND?: SigningConditionScalarWhereWithAggregatesInput | SigningConditionScalarWhereWithAggregatesInput[]
    OR?: SigningConditionScalarWhereWithAggregatesInput[]
    NOT?: SigningConditionScalarWhereWithAggregatesInput | SigningConditionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SigningCondition"> | number
    method?: StringNullableWithAggregatesFilter<"SigningCondition"> | string | null
    kind?: StringNullableWithAggregatesFilter<"SigningCondition"> | string | null
    content?: StringNullableWithAggregatesFilter<"SigningCondition"> | string | null
    keyUserKeyName?: StringNullableWithAggregatesFilter<"SigningCondition"> | string | null
    allowed?: BoolNullableWithAggregatesFilter<"SigningCondition"> | boolean | null
    keyUserId?: IntNullableWithAggregatesFilter<"SigningCondition"> | number | null
  }

  export type LogWhereInput = {
    AND?: LogWhereInput | LogWhereInput[]
    OR?: LogWhereInput[]
    NOT?: LogWhereInput | LogWhereInput[]
    id?: IntFilter<"Log"> | number
    timestamp?: DateTimeFilter<"Log"> | Date | string
    type?: StringFilter<"Log"> | string
    method?: StringNullableFilter<"Log"> | string | null
    params?: StringNullableFilter<"Log"> | string | null
    keyUserId?: IntNullableFilter<"Log"> | number | null
    autoApproved?: BoolFilter<"Log"> | boolean
    approvalType?: StringNullableFilter<"Log"> | string | null
    keyName?: StringNullableFilter<"Log"> | string | null
    remotePubkey?: StringNullableFilter<"Log"> | string | null
    KeyUser?: XOR<KeyUserNullableScalarRelationFilter, KeyUserWhereInput> | null
  }

  export type LogOrderByWithRelationInput = {
    id?: SortOrder
    timestamp?: SortOrder
    type?: SortOrder
    method?: SortOrderInput | SortOrder
    params?: SortOrderInput | SortOrder
    keyUserId?: SortOrderInput | SortOrder
    autoApproved?: SortOrder
    approvalType?: SortOrderInput | SortOrder
    keyName?: SortOrderInput | SortOrder
    remotePubkey?: SortOrderInput | SortOrder
    KeyUser?: KeyUserOrderByWithRelationInput
  }

  export type LogWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: LogWhereInput | LogWhereInput[]
    OR?: LogWhereInput[]
    NOT?: LogWhereInput | LogWhereInput[]
    timestamp?: DateTimeFilter<"Log"> | Date | string
    type?: StringFilter<"Log"> | string
    method?: StringNullableFilter<"Log"> | string | null
    params?: StringNullableFilter<"Log"> | string | null
    keyUserId?: IntNullableFilter<"Log"> | number | null
    autoApproved?: BoolFilter<"Log"> | boolean
    approvalType?: StringNullableFilter<"Log"> | string | null
    keyName?: StringNullableFilter<"Log"> | string | null
    remotePubkey?: StringNullableFilter<"Log"> | string | null
    KeyUser?: XOR<KeyUserNullableScalarRelationFilter, KeyUserWhereInput> | null
  }, "id">

  export type LogOrderByWithAggregationInput = {
    id?: SortOrder
    timestamp?: SortOrder
    type?: SortOrder
    method?: SortOrderInput | SortOrder
    params?: SortOrderInput | SortOrder
    keyUserId?: SortOrderInput | SortOrder
    autoApproved?: SortOrder
    approvalType?: SortOrderInput | SortOrder
    keyName?: SortOrderInput | SortOrder
    remotePubkey?: SortOrderInput | SortOrder
    _count?: LogCountOrderByAggregateInput
    _avg?: LogAvgOrderByAggregateInput
    _max?: LogMaxOrderByAggregateInput
    _min?: LogMinOrderByAggregateInput
    _sum?: LogSumOrderByAggregateInput
  }

  export type LogScalarWhereWithAggregatesInput = {
    AND?: LogScalarWhereWithAggregatesInput | LogScalarWhereWithAggregatesInput[]
    OR?: LogScalarWhereWithAggregatesInput[]
    NOT?: LogScalarWhereWithAggregatesInput | LogScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Log"> | number
    timestamp?: DateTimeWithAggregatesFilter<"Log"> | Date | string
    type?: StringWithAggregatesFilter<"Log"> | string
    method?: StringNullableWithAggregatesFilter<"Log"> | string | null
    params?: StringNullableWithAggregatesFilter<"Log"> | string | null
    keyUserId?: IntNullableWithAggregatesFilter<"Log"> | number | null
    autoApproved?: BoolWithAggregatesFilter<"Log"> | boolean
    approvalType?: StringNullableWithAggregatesFilter<"Log"> | string | null
    keyName?: StringNullableWithAggregatesFilter<"Log"> | string | null
    remotePubkey?: StringNullableWithAggregatesFilter<"Log"> | string | null
  }

  export type PolicyWhereInput = {
    AND?: PolicyWhereInput | PolicyWhereInput[]
    OR?: PolicyWhereInput[]
    NOT?: PolicyWhereInput | PolicyWhereInput[]
    id?: IntFilter<"Policy"> | number
    name?: StringFilter<"Policy"> | string
    createdAt?: DateTimeFilter<"Policy"> | Date | string
    updatedAt?: DateTimeFilter<"Policy"> | Date | string
    expiresAt?: DateTimeNullableFilter<"Policy"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"Policy"> | Date | string | null
    description?: StringNullableFilter<"Policy"> | string | null
    rules?: PolicyRuleListRelationFilter
    Token?: TokenListRelationFilter
  }

  export type PolicyOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    expiresAt?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    rules?: PolicyRuleOrderByRelationAggregateInput
    Token?: TokenOrderByRelationAggregateInput
  }

  export type PolicyWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PolicyWhereInput | PolicyWhereInput[]
    OR?: PolicyWhereInput[]
    NOT?: PolicyWhereInput | PolicyWhereInput[]
    name?: StringFilter<"Policy"> | string
    createdAt?: DateTimeFilter<"Policy"> | Date | string
    updatedAt?: DateTimeFilter<"Policy"> | Date | string
    expiresAt?: DateTimeNullableFilter<"Policy"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"Policy"> | Date | string | null
    description?: StringNullableFilter<"Policy"> | string | null
    rules?: PolicyRuleListRelationFilter
    Token?: TokenListRelationFilter
  }, "id">

  export type PolicyOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    expiresAt?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    _count?: PolicyCountOrderByAggregateInput
    _avg?: PolicyAvgOrderByAggregateInput
    _max?: PolicyMaxOrderByAggregateInput
    _min?: PolicyMinOrderByAggregateInput
    _sum?: PolicySumOrderByAggregateInput
  }

  export type PolicyScalarWhereWithAggregatesInput = {
    AND?: PolicyScalarWhereWithAggregatesInput | PolicyScalarWhereWithAggregatesInput[]
    OR?: PolicyScalarWhereWithAggregatesInput[]
    NOT?: PolicyScalarWhereWithAggregatesInput | PolicyScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Policy"> | number
    name?: StringWithAggregatesFilter<"Policy"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Policy"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Policy"> | Date | string
    expiresAt?: DateTimeNullableWithAggregatesFilter<"Policy"> | Date | string | null
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Policy"> | Date | string | null
    description?: StringNullableWithAggregatesFilter<"Policy"> | string | null
  }

  export type PolicyRuleWhereInput = {
    AND?: PolicyRuleWhereInput | PolicyRuleWhereInput[]
    OR?: PolicyRuleWhereInput[]
    NOT?: PolicyRuleWhereInput | PolicyRuleWhereInput[]
    id?: IntFilter<"PolicyRule"> | number
    method?: StringFilter<"PolicyRule"> | string
    kind?: StringNullableFilter<"PolicyRule"> | string | null
    maxUsageCount?: IntNullableFilter<"PolicyRule"> | number | null
    currentUsageCount?: IntNullableFilter<"PolicyRule"> | number | null
    policyId?: IntNullableFilter<"PolicyRule"> | number | null
    Policy?: XOR<PolicyNullableScalarRelationFilter, PolicyWhereInput> | null
  }

  export type PolicyRuleOrderByWithRelationInput = {
    id?: SortOrder
    method?: SortOrder
    kind?: SortOrderInput | SortOrder
    maxUsageCount?: SortOrderInput | SortOrder
    currentUsageCount?: SortOrderInput | SortOrder
    policyId?: SortOrderInput | SortOrder
    Policy?: PolicyOrderByWithRelationInput
  }

  export type PolicyRuleWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PolicyRuleWhereInput | PolicyRuleWhereInput[]
    OR?: PolicyRuleWhereInput[]
    NOT?: PolicyRuleWhereInput | PolicyRuleWhereInput[]
    method?: StringFilter<"PolicyRule"> | string
    kind?: StringNullableFilter<"PolicyRule"> | string | null
    maxUsageCount?: IntNullableFilter<"PolicyRule"> | number | null
    currentUsageCount?: IntNullableFilter<"PolicyRule"> | number | null
    policyId?: IntNullableFilter<"PolicyRule"> | number | null
    Policy?: XOR<PolicyNullableScalarRelationFilter, PolicyWhereInput> | null
  }, "id">

  export type PolicyRuleOrderByWithAggregationInput = {
    id?: SortOrder
    method?: SortOrder
    kind?: SortOrderInput | SortOrder
    maxUsageCount?: SortOrderInput | SortOrder
    currentUsageCount?: SortOrderInput | SortOrder
    policyId?: SortOrderInput | SortOrder
    _count?: PolicyRuleCountOrderByAggregateInput
    _avg?: PolicyRuleAvgOrderByAggregateInput
    _max?: PolicyRuleMaxOrderByAggregateInput
    _min?: PolicyRuleMinOrderByAggregateInput
    _sum?: PolicyRuleSumOrderByAggregateInput
  }

  export type PolicyRuleScalarWhereWithAggregatesInput = {
    AND?: PolicyRuleScalarWhereWithAggregatesInput | PolicyRuleScalarWhereWithAggregatesInput[]
    OR?: PolicyRuleScalarWhereWithAggregatesInput[]
    NOT?: PolicyRuleScalarWhereWithAggregatesInput | PolicyRuleScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PolicyRule"> | number
    method?: StringWithAggregatesFilter<"PolicyRule"> | string
    kind?: StringNullableWithAggregatesFilter<"PolicyRule"> | string | null
    maxUsageCount?: IntNullableWithAggregatesFilter<"PolicyRule"> | number | null
    currentUsageCount?: IntNullableWithAggregatesFilter<"PolicyRule"> | number | null
    policyId?: IntNullableWithAggregatesFilter<"PolicyRule"> | number | null
  }

  export type TokenWhereInput = {
    AND?: TokenWhereInput | TokenWhereInput[]
    OR?: TokenWhereInput[]
    NOT?: TokenWhereInput | TokenWhereInput[]
    id?: IntFilter<"Token"> | number
    keyName?: StringFilter<"Token"> | string
    token?: StringFilter<"Token"> | string
    clientName?: StringFilter<"Token"> | string
    createdBy?: StringFilter<"Token"> | string
    createdAt?: DateTimeFilter<"Token"> | Date | string
    updatedAt?: DateTimeFilter<"Token"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Token"> | Date | string | null
    expiresAt?: DateTimeNullableFilter<"Token"> | Date | string | null
    redeemedAt?: DateTimeNullableFilter<"Token"> | Date | string | null
    keyUserId?: IntNullableFilter<"Token"> | number | null
    policyId?: IntNullableFilter<"Token"> | number | null
    policy?: XOR<PolicyNullableScalarRelationFilter, PolicyWhereInput> | null
    KeyUser?: XOR<KeyUserNullableScalarRelationFilter, KeyUserWhereInput> | null
  }

  export type TokenOrderByWithRelationInput = {
    id?: SortOrder
    keyName?: SortOrder
    token?: SortOrder
    clientName?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    expiresAt?: SortOrderInput | SortOrder
    redeemedAt?: SortOrderInput | SortOrder
    keyUserId?: SortOrderInput | SortOrder
    policyId?: SortOrderInput | SortOrder
    policy?: PolicyOrderByWithRelationInput
    KeyUser?: KeyUserOrderByWithRelationInput
  }

  export type TokenWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    token?: string
    AND?: TokenWhereInput | TokenWhereInput[]
    OR?: TokenWhereInput[]
    NOT?: TokenWhereInput | TokenWhereInput[]
    keyName?: StringFilter<"Token"> | string
    clientName?: StringFilter<"Token"> | string
    createdBy?: StringFilter<"Token"> | string
    createdAt?: DateTimeFilter<"Token"> | Date | string
    updatedAt?: DateTimeFilter<"Token"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Token"> | Date | string | null
    expiresAt?: DateTimeNullableFilter<"Token"> | Date | string | null
    redeemedAt?: DateTimeNullableFilter<"Token"> | Date | string | null
    keyUserId?: IntNullableFilter<"Token"> | number | null
    policyId?: IntNullableFilter<"Token"> | number | null
    policy?: XOR<PolicyNullableScalarRelationFilter, PolicyWhereInput> | null
    KeyUser?: XOR<KeyUserNullableScalarRelationFilter, KeyUserWhereInput> | null
  }, "id" | "token">

  export type TokenOrderByWithAggregationInput = {
    id?: SortOrder
    keyName?: SortOrder
    token?: SortOrder
    clientName?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    expiresAt?: SortOrderInput | SortOrder
    redeemedAt?: SortOrderInput | SortOrder
    keyUserId?: SortOrderInput | SortOrder
    policyId?: SortOrderInput | SortOrder
    _count?: TokenCountOrderByAggregateInput
    _avg?: TokenAvgOrderByAggregateInput
    _max?: TokenMaxOrderByAggregateInput
    _min?: TokenMinOrderByAggregateInput
    _sum?: TokenSumOrderByAggregateInput
  }

  export type TokenScalarWhereWithAggregatesInput = {
    AND?: TokenScalarWhereWithAggregatesInput | TokenScalarWhereWithAggregatesInput[]
    OR?: TokenScalarWhereWithAggregatesInput[]
    NOT?: TokenScalarWhereWithAggregatesInput | TokenScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Token"> | number
    keyName?: StringWithAggregatesFilter<"Token"> | string
    token?: StringWithAggregatesFilter<"Token"> | string
    clientName?: StringWithAggregatesFilter<"Token"> | string
    createdBy?: StringWithAggregatesFilter<"Token"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Token"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Token"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Token"> | Date | string | null
    expiresAt?: DateTimeNullableWithAggregatesFilter<"Token"> | Date | string | null
    redeemedAt?: DateTimeNullableWithAggregatesFilter<"Token"> | Date | string | null
    keyUserId?: IntNullableWithAggregatesFilter<"Token"> | number | null
    policyId?: IntNullableWithAggregatesFilter<"Token"> | number | null
  }

  export type ConnectionTokenWhereInput = {
    AND?: ConnectionTokenWhereInput | ConnectionTokenWhereInput[]
    OR?: ConnectionTokenWhereInput[]
    NOT?: ConnectionTokenWhereInput | ConnectionTokenWhereInput[]
    id?: IntFilter<"ConnectionToken"> | number
    keyName?: StringFilter<"ConnectionToken"> | string
    token?: StringFilter<"ConnectionToken"> | string
    createdAt?: DateTimeFilter<"ConnectionToken"> | Date | string
    expiresAt?: DateTimeFilter<"ConnectionToken"> | Date | string
    redeemedAt?: DateTimeNullableFilter<"ConnectionToken"> | Date | string | null
  }

  export type ConnectionTokenOrderByWithRelationInput = {
    id?: SortOrder
    keyName?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
    redeemedAt?: SortOrderInput | SortOrder
  }

  export type ConnectionTokenWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    token?: string
    AND?: ConnectionTokenWhereInput | ConnectionTokenWhereInput[]
    OR?: ConnectionTokenWhereInput[]
    NOT?: ConnectionTokenWhereInput | ConnectionTokenWhereInput[]
    keyName?: StringFilter<"ConnectionToken"> | string
    createdAt?: DateTimeFilter<"ConnectionToken"> | Date | string
    expiresAt?: DateTimeFilter<"ConnectionToken"> | Date | string
    redeemedAt?: DateTimeNullableFilter<"ConnectionToken"> | Date | string | null
  }, "id" | "token">

  export type ConnectionTokenOrderByWithAggregationInput = {
    id?: SortOrder
    keyName?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
    redeemedAt?: SortOrderInput | SortOrder
    _count?: ConnectionTokenCountOrderByAggregateInput
    _avg?: ConnectionTokenAvgOrderByAggregateInput
    _max?: ConnectionTokenMaxOrderByAggregateInput
    _min?: ConnectionTokenMinOrderByAggregateInput
    _sum?: ConnectionTokenSumOrderByAggregateInput
  }

  export type ConnectionTokenScalarWhereWithAggregatesInput = {
    AND?: ConnectionTokenScalarWhereWithAggregatesInput | ConnectionTokenScalarWhereWithAggregatesInput[]
    OR?: ConnectionTokenScalarWhereWithAggregatesInput[]
    NOT?: ConnectionTokenScalarWhereWithAggregatesInput | ConnectionTokenScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ConnectionToken"> | number
    keyName?: StringWithAggregatesFilter<"ConnectionToken"> | string
    token?: StringWithAggregatesFilter<"ConnectionToken"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ConnectionToken"> | Date | string
    expiresAt?: DateTimeWithAggregatesFilter<"ConnectionToken"> | Date | string
    redeemedAt?: DateTimeNullableWithAggregatesFilter<"ConnectionToken"> | Date | string | null
  }

  export type AdminLogWhereInput = {
    AND?: AdminLogWhereInput | AdminLogWhereInput[]
    OR?: AdminLogWhereInput[]
    NOT?: AdminLogWhereInput | AdminLogWhereInput[]
    id?: IntFilter<"AdminLog"> | number
    timestamp?: DateTimeFilter<"AdminLog"> | Date | string
    eventType?: StringFilter<"AdminLog"> | string
    keyName?: StringNullableFilter<"AdminLog"> | string | null
    appId?: IntNullableFilter<"AdminLog"> | number | null
    appName?: StringNullableFilter<"AdminLog"> | string | null
    clientName?: StringNullableFilter<"AdminLog"> | string | null
    clientVersion?: StringNullableFilter<"AdminLog"> | string | null
    ipAddress?: StringNullableFilter<"AdminLog"> | string | null
    command?: StringNullableFilter<"AdminLog"> | string | null
    commandResult?: StringNullableFilter<"AdminLog"> | string | null
  }

  export type AdminLogOrderByWithRelationInput = {
    id?: SortOrder
    timestamp?: SortOrder
    eventType?: SortOrder
    keyName?: SortOrderInput | SortOrder
    appId?: SortOrderInput | SortOrder
    appName?: SortOrderInput | SortOrder
    clientName?: SortOrderInput | SortOrder
    clientVersion?: SortOrderInput | SortOrder
    ipAddress?: SortOrderInput | SortOrder
    command?: SortOrderInput | SortOrder
    commandResult?: SortOrderInput | SortOrder
  }

  export type AdminLogWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AdminLogWhereInput | AdminLogWhereInput[]
    OR?: AdminLogWhereInput[]
    NOT?: AdminLogWhereInput | AdminLogWhereInput[]
    timestamp?: DateTimeFilter<"AdminLog"> | Date | string
    eventType?: StringFilter<"AdminLog"> | string
    keyName?: StringNullableFilter<"AdminLog"> | string | null
    appId?: IntNullableFilter<"AdminLog"> | number | null
    appName?: StringNullableFilter<"AdminLog"> | string | null
    clientName?: StringNullableFilter<"AdminLog"> | string | null
    clientVersion?: StringNullableFilter<"AdminLog"> | string | null
    ipAddress?: StringNullableFilter<"AdminLog"> | string | null
    command?: StringNullableFilter<"AdminLog"> | string | null
    commandResult?: StringNullableFilter<"AdminLog"> | string | null
  }, "id">

  export type AdminLogOrderByWithAggregationInput = {
    id?: SortOrder
    timestamp?: SortOrder
    eventType?: SortOrder
    keyName?: SortOrderInput | SortOrder
    appId?: SortOrderInput | SortOrder
    appName?: SortOrderInput | SortOrder
    clientName?: SortOrderInput | SortOrder
    clientVersion?: SortOrderInput | SortOrder
    ipAddress?: SortOrderInput | SortOrder
    command?: SortOrderInput | SortOrder
    commandResult?: SortOrderInput | SortOrder
    _count?: AdminLogCountOrderByAggregateInput
    _avg?: AdminLogAvgOrderByAggregateInput
    _max?: AdminLogMaxOrderByAggregateInput
    _min?: AdminLogMinOrderByAggregateInput
    _sum?: AdminLogSumOrderByAggregateInput
  }

  export type AdminLogScalarWhereWithAggregatesInput = {
    AND?: AdminLogScalarWhereWithAggregatesInput | AdminLogScalarWhereWithAggregatesInput[]
    OR?: AdminLogScalarWhereWithAggregatesInput[]
    NOT?: AdminLogScalarWhereWithAggregatesInput | AdminLogScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"AdminLog"> | number
    timestamp?: DateTimeWithAggregatesFilter<"AdminLog"> | Date | string
    eventType?: StringWithAggregatesFilter<"AdminLog"> | string
    keyName?: StringNullableWithAggregatesFilter<"AdminLog"> | string | null
    appId?: IntNullableWithAggregatesFilter<"AdminLog"> | number | null
    appName?: StringNullableWithAggregatesFilter<"AdminLog"> | string | null
    clientName?: StringNullableWithAggregatesFilter<"AdminLog"> | string | null
    clientVersion?: StringNullableWithAggregatesFilter<"AdminLog"> | string | null
    ipAddress?: StringNullableWithAggregatesFilter<"AdminLog"> | string | null
    command?: StringNullableWithAggregatesFilter<"AdminLog"> | string | null
    commandResult?: StringNullableWithAggregatesFilter<"AdminLog"> | string | null
  }

  export type SettingWhereInput = {
    AND?: SettingWhereInput | SettingWhereInput[]
    OR?: SettingWhereInput[]
    NOT?: SettingWhereInput | SettingWhereInput[]
    key?: StringFilter<"Setting"> | string
    value?: StringFilter<"Setting"> | string
  }

  export type SettingOrderByWithRelationInput = {
    key?: SortOrder
    value?: SortOrder
  }

  export type SettingWhereUniqueInput = Prisma.AtLeast<{
    key?: string
    AND?: SettingWhereInput | SettingWhereInput[]
    OR?: SettingWhereInput[]
    NOT?: SettingWhereInput | SettingWhereInput[]
    value?: StringFilter<"Setting"> | string
  }, "key">

  export type SettingOrderByWithAggregationInput = {
    key?: SortOrder
    value?: SortOrder
    _count?: SettingCountOrderByAggregateInput
    _max?: SettingMaxOrderByAggregateInput
    _min?: SettingMinOrderByAggregateInput
  }

  export type SettingScalarWhereWithAggregatesInput = {
    AND?: SettingScalarWhereWithAggregatesInput | SettingScalarWhereWithAggregatesInput[]
    OR?: SettingScalarWhereWithAggregatesInput[]
    NOT?: SettingScalarWhereWithAggregatesInput | SettingScalarWhereWithAggregatesInput[]
    key?: StringWithAggregatesFilter<"Setting"> | string
    value?: StringWithAggregatesFilter<"Setting"> | string
  }

  export type RequestCreateInput = {
    id?: string
    keyName?: string | null
    createdAt?: Date | string
    processedAt?: Date | string | null
    requestId: string
    remotePubkey: string
    method: string
    params?: string | null
    allowed?: boolean | null
    autoApproved?: boolean
    approvalType?: string | null
    KeyUser?: KeyUserCreateNestedOneWithoutRequestsInput
  }

  export type RequestUncheckedCreateInput = {
    id?: string
    keyName?: string | null
    createdAt?: Date | string
    processedAt?: Date | string | null
    requestId: string
    remotePubkey: string
    method: string
    params?: string | null
    allowed?: boolean | null
    autoApproved?: boolean
    approvalType?: string | null
    keyUserId?: number | null
  }

  export type RequestUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    keyName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    requestId?: StringFieldUpdateOperationsInput | string
    remotePubkey?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    params?: NullableStringFieldUpdateOperationsInput | string | null
    allowed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    autoApproved?: BoolFieldUpdateOperationsInput | boolean
    approvalType?: NullableStringFieldUpdateOperationsInput | string | null
    KeyUser?: KeyUserUpdateOneWithoutRequestsNestedInput
  }

  export type RequestUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    keyName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    requestId?: StringFieldUpdateOperationsInput | string
    remotePubkey?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    params?: NullableStringFieldUpdateOperationsInput | string | null
    allowed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    autoApproved?: BoolFieldUpdateOperationsInput | boolean
    approvalType?: NullableStringFieldUpdateOperationsInput | string | null
    keyUserId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type RequestCreateManyInput = {
    id?: string
    keyName?: string | null
    createdAt?: Date | string
    processedAt?: Date | string | null
    requestId: string
    remotePubkey: string
    method: string
    params?: string | null
    allowed?: boolean | null
    autoApproved?: boolean
    approvalType?: string | null
    keyUserId?: number | null
  }

  export type RequestUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    keyName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    requestId?: StringFieldUpdateOperationsInput | string
    remotePubkey?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    params?: NullableStringFieldUpdateOperationsInput | string | null
    allowed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    autoApproved?: BoolFieldUpdateOperationsInput | boolean
    approvalType?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RequestUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    keyName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    requestId?: StringFieldUpdateOperationsInput | string
    remotePubkey?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    params?: NullableStringFieldUpdateOperationsInput | string | null
    allowed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    autoApproved?: BoolFieldUpdateOperationsInput | boolean
    approvalType?: NullableStringFieldUpdateOperationsInput | string | null
    keyUserId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type KeyUserCreateInput = {
    keyName: string
    userPubkey: string
    createdAt?: Date | string
    updatedAt?: Date | string
    revokedAt?: Date | string | null
    suspendedAt?: Date | string | null
    suspendUntil?: Date | string | null
    lastUsedAt?: Date | string | null
    description?: string | null
    trustLevel?: string
    nostrconnectRelays?: string | null
    logs?: LogCreateNestedManyWithoutKeyUserInput
    signingConditions?: SigningConditionCreateNestedManyWithoutKeyUserInput
    Token?: TokenCreateNestedManyWithoutKeyUserInput
    requests?: RequestCreateNestedManyWithoutKeyUserInput
  }

  export type KeyUserUncheckedCreateInput = {
    id?: number
    keyName: string
    userPubkey: string
    createdAt?: Date | string
    updatedAt?: Date | string
    revokedAt?: Date | string | null
    suspendedAt?: Date | string | null
    suspendUntil?: Date | string | null
    lastUsedAt?: Date | string | null
    description?: string | null
    trustLevel?: string
    nostrconnectRelays?: string | null
    logs?: LogUncheckedCreateNestedManyWithoutKeyUserInput
    signingConditions?: SigningConditionUncheckedCreateNestedManyWithoutKeyUserInput
    Token?: TokenUncheckedCreateNestedManyWithoutKeyUserInput
    requests?: RequestUncheckedCreateNestedManyWithoutKeyUserInput
  }

  export type KeyUserUpdateInput = {
    keyName?: StringFieldUpdateOperationsInput | string
    userPubkey?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    suspendedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    suspendUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastUsedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    trustLevel?: StringFieldUpdateOperationsInput | string
    nostrconnectRelays?: NullableStringFieldUpdateOperationsInput | string | null
    logs?: LogUpdateManyWithoutKeyUserNestedInput
    signingConditions?: SigningConditionUpdateManyWithoutKeyUserNestedInput
    Token?: TokenUpdateManyWithoutKeyUserNestedInput
    requests?: RequestUpdateManyWithoutKeyUserNestedInput
  }

  export type KeyUserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    keyName?: StringFieldUpdateOperationsInput | string
    userPubkey?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    suspendedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    suspendUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastUsedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    trustLevel?: StringFieldUpdateOperationsInput | string
    nostrconnectRelays?: NullableStringFieldUpdateOperationsInput | string | null
    logs?: LogUncheckedUpdateManyWithoutKeyUserNestedInput
    signingConditions?: SigningConditionUncheckedUpdateManyWithoutKeyUserNestedInput
    Token?: TokenUncheckedUpdateManyWithoutKeyUserNestedInput
    requests?: RequestUncheckedUpdateManyWithoutKeyUserNestedInput
  }

  export type KeyUserCreateManyInput = {
    id?: number
    keyName: string
    userPubkey: string
    createdAt?: Date | string
    updatedAt?: Date | string
    revokedAt?: Date | string | null
    suspendedAt?: Date | string | null
    suspendUntil?: Date | string | null
    lastUsedAt?: Date | string | null
    description?: string | null
    trustLevel?: string
    nostrconnectRelays?: string | null
  }

  export type KeyUserUpdateManyMutationInput = {
    keyName?: StringFieldUpdateOperationsInput | string
    userPubkey?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    suspendedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    suspendUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastUsedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    trustLevel?: StringFieldUpdateOperationsInput | string
    nostrconnectRelays?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type KeyUserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    keyName?: StringFieldUpdateOperationsInput | string
    userPubkey?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    suspendedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    suspendUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastUsedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    trustLevel?: StringFieldUpdateOperationsInput | string
    nostrconnectRelays?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type KeyCreateInput = {
    keyName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    pubkey: string
  }

  export type KeyUncheckedCreateInput = {
    id?: number
    keyName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    pubkey: string
  }

  export type KeyUpdateInput = {
    keyName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pubkey?: StringFieldUpdateOperationsInput | string
  }

  export type KeyUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    keyName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pubkey?: StringFieldUpdateOperationsInput | string
  }

  export type KeyCreateManyInput = {
    id?: number
    keyName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    pubkey: string
  }

  export type KeyUpdateManyMutationInput = {
    keyName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pubkey?: StringFieldUpdateOperationsInput | string
  }

  export type KeyUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    keyName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pubkey?: StringFieldUpdateOperationsInput | string
  }

  export type SigningConditionCreateInput = {
    method?: string | null
    kind?: string | null
    content?: string | null
    keyUserKeyName?: string | null
    allowed?: boolean | null
    KeyUser?: KeyUserCreateNestedOneWithoutSigningConditionsInput
  }

  export type SigningConditionUncheckedCreateInput = {
    id?: number
    method?: string | null
    kind?: string | null
    content?: string | null
    keyUserKeyName?: string | null
    allowed?: boolean | null
    keyUserId?: number | null
  }

  export type SigningConditionUpdateInput = {
    method?: NullableStringFieldUpdateOperationsInput | string | null
    kind?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    keyUserKeyName?: NullableStringFieldUpdateOperationsInput | string | null
    allowed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    KeyUser?: KeyUserUpdateOneWithoutSigningConditionsNestedInput
  }

  export type SigningConditionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    method?: NullableStringFieldUpdateOperationsInput | string | null
    kind?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    keyUserKeyName?: NullableStringFieldUpdateOperationsInput | string | null
    allowed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    keyUserId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type SigningConditionCreateManyInput = {
    id?: number
    method?: string | null
    kind?: string | null
    content?: string | null
    keyUserKeyName?: string | null
    allowed?: boolean | null
    keyUserId?: number | null
  }

  export type SigningConditionUpdateManyMutationInput = {
    method?: NullableStringFieldUpdateOperationsInput | string | null
    kind?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    keyUserKeyName?: NullableStringFieldUpdateOperationsInput | string | null
    allowed?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type SigningConditionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    method?: NullableStringFieldUpdateOperationsInput | string | null
    kind?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    keyUserKeyName?: NullableStringFieldUpdateOperationsInput | string | null
    allowed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    keyUserId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type LogCreateInput = {
    timestamp: Date | string
    type: string
    method?: string | null
    params?: string | null
    autoApproved?: boolean
    approvalType?: string | null
    keyName?: string | null
    remotePubkey?: string | null
    KeyUser?: KeyUserCreateNestedOneWithoutLogsInput
  }

  export type LogUncheckedCreateInput = {
    id?: number
    timestamp: Date | string
    type: string
    method?: string | null
    params?: string | null
    keyUserId?: number | null
    autoApproved?: boolean
    approvalType?: string | null
    keyName?: string | null
    remotePubkey?: string | null
  }

  export type LogUpdateInput = {
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    method?: NullableStringFieldUpdateOperationsInput | string | null
    params?: NullableStringFieldUpdateOperationsInput | string | null
    autoApproved?: BoolFieldUpdateOperationsInput | boolean
    approvalType?: NullableStringFieldUpdateOperationsInput | string | null
    keyName?: NullableStringFieldUpdateOperationsInput | string | null
    remotePubkey?: NullableStringFieldUpdateOperationsInput | string | null
    KeyUser?: KeyUserUpdateOneWithoutLogsNestedInput
  }

  export type LogUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    method?: NullableStringFieldUpdateOperationsInput | string | null
    params?: NullableStringFieldUpdateOperationsInput | string | null
    keyUserId?: NullableIntFieldUpdateOperationsInput | number | null
    autoApproved?: BoolFieldUpdateOperationsInput | boolean
    approvalType?: NullableStringFieldUpdateOperationsInput | string | null
    keyName?: NullableStringFieldUpdateOperationsInput | string | null
    remotePubkey?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LogCreateManyInput = {
    id?: number
    timestamp: Date | string
    type: string
    method?: string | null
    params?: string | null
    keyUserId?: number | null
    autoApproved?: boolean
    approvalType?: string | null
    keyName?: string | null
    remotePubkey?: string | null
  }

  export type LogUpdateManyMutationInput = {
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    method?: NullableStringFieldUpdateOperationsInput | string | null
    params?: NullableStringFieldUpdateOperationsInput | string | null
    autoApproved?: BoolFieldUpdateOperationsInput | boolean
    approvalType?: NullableStringFieldUpdateOperationsInput | string | null
    keyName?: NullableStringFieldUpdateOperationsInput | string | null
    remotePubkey?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LogUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    method?: NullableStringFieldUpdateOperationsInput | string | null
    params?: NullableStringFieldUpdateOperationsInput | string | null
    keyUserId?: NullableIntFieldUpdateOperationsInput | number | null
    autoApproved?: BoolFieldUpdateOperationsInput | boolean
    approvalType?: NullableStringFieldUpdateOperationsInput | string | null
    keyName?: NullableStringFieldUpdateOperationsInput | string | null
    remotePubkey?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PolicyCreateInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    expiresAt?: Date | string | null
    deletedAt?: Date | string | null
    description?: string | null
    rules?: PolicyRuleCreateNestedManyWithoutPolicyInput
    Token?: TokenCreateNestedManyWithoutPolicyInput
  }

  export type PolicyUncheckedCreateInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    expiresAt?: Date | string | null
    deletedAt?: Date | string | null
    description?: string | null
    rules?: PolicyRuleUncheckedCreateNestedManyWithoutPolicyInput
    Token?: TokenUncheckedCreateNestedManyWithoutPolicyInput
  }

  export type PolicyUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    rules?: PolicyRuleUpdateManyWithoutPolicyNestedInput
    Token?: TokenUpdateManyWithoutPolicyNestedInput
  }

  export type PolicyUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    rules?: PolicyRuleUncheckedUpdateManyWithoutPolicyNestedInput
    Token?: TokenUncheckedUpdateManyWithoutPolicyNestedInput
  }

  export type PolicyCreateManyInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    expiresAt?: Date | string | null
    deletedAt?: Date | string | null
    description?: string | null
  }

  export type PolicyUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PolicyUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PolicyRuleCreateInput = {
    method: string
    kind?: string | null
    maxUsageCount?: number | null
    currentUsageCount?: number | null
    Policy?: PolicyCreateNestedOneWithoutRulesInput
  }

  export type PolicyRuleUncheckedCreateInput = {
    id?: number
    method: string
    kind?: string | null
    maxUsageCount?: number | null
    currentUsageCount?: number | null
    policyId?: number | null
  }

  export type PolicyRuleUpdateInput = {
    method?: StringFieldUpdateOperationsInput | string
    kind?: NullableStringFieldUpdateOperationsInput | string | null
    maxUsageCount?: NullableIntFieldUpdateOperationsInput | number | null
    currentUsageCount?: NullableIntFieldUpdateOperationsInput | number | null
    Policy?: PolicyUpdateOneWithoutRulesNestedInput
  }

  export type PolicyRuleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    method?: StringFieldUpdateOperationsInput | string
    kind?: NullableStringFieldUpdateOperationsInput | string | null
    maxUsageCount?: NullableIntFieldUpdateOperationsInput | number | null
    currentUsageCount?: NullableIntFieldUpdateOperationsInput | number | null
    policyId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PolicyRuleCreateManyInput = {
    id?: number
    method: string
    kind?: string | null
    maxUsageCount?: number | null
    currentUsageCount?: number | null
    policyId?: number | null
  }

  export type PolicyRuleUpdateManyMutationInput = {
    method?: StringFieldUpdateOperationsInput | string
    kind?: NullableStringFieldUpdateOperationsInput | string | null
    maxUsageCount?: NullableIntFieldUpdateOperationsInput | number | null
    currentUsageCount?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PolicyRuleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    method?: StringFieldUpdateOperationsInput | string
    kind?: NullableStringFieldUpdateOperationsInput | string | null
    maxUsageCount?: NullableIntFieldUpdateOperationsInput | number | null
    currentUsageCount?: NullableIntFieldUpdateOperationsInput | number | null
    policyId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TokenCreateInput = {
    keyName: string
    token: string
    clientName: string
    createdBy: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    expiresAt?: Date | string | null
    redeemedAt?: Date | string | null
    policy?: PolicyCreateNestedOneWithoutTokenInput
    KeyUser?: KeyUserCreateNestedOneWithoutTokenInput
  }

  export type TokenUncheckedCreateInput = {
    id?: number
    keyName: string
    token: string
    clientName: string
    createdBy: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    expiresAt?: Date | string | null
    redeemedAt?: Date | string | null
    keyUserId?: number | null
    policyId?: number | null
  }

  export type TokenUpdateInput = {
    keyName?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    clientName?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    redeemedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    policy?: PolicyUpdateOneWithoutTokenNestedInput
    KeyUser?: KeyUserUpdateOneWithoutTokenNestedInput
  }

  export type TokenUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    keyName?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    clientName?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    redeemedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    keyUserId?: NullableIntFieldUpdateOperationsInput | number | null
    policyId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TokenCreateManyInput = {
    id?: number
    keyName: string
    token: string
    clientName: string
    createdBy: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    expiresAt?: Date | string | null
    redeemedAt?: Date | string | null
    keyUserId?: number | null
    policyId?: number | null
  }

  export type TokenUpdateManyMutationInput = {
    keyName?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    clientName?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    redeemedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TokenUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    keyName?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    clientName?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    redeemedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    keyUserId?: NullableIntFieldUpdateOperationsInput | number | null
    policyId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ConnectionTokenCreateInput = {
    keyName: string
    token: string
    createdAt?: Date | string
    expiresAt: Date | string
    redeemedAt?: Date | string | null
  }

  export type ConnectionTokenUncheckedCreateInput = {
    id?: number
    keyName: string
    token: string
    createdAt?: Date | string
    expiresAt: Date | string
    redeemedAt?: Date | string | null
  }

  export type ConnectionTokenUpdateInput = {
    keyName?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    redeemedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ConnectionTokenUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    keyName?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    redeemedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ConnectionTokenCreateManyInput = {
    id?: number
    keyName: string
    token: string
    createdAt?: Date | string
    expiresAt: Date | string
    redeemedAt?: Date | string | null
  }

  export type ConnectionTokenUpdateManyMutationInput = {
    keyName?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    redeemedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ConnectionTokenUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    keyName?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    redeemedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AdminLogCreateInput = {
    timestamp?: Date | string
    eventType: string
    keyName?: string | null
    appId?: number | null
    appName?: string | null
    clientName?: string | null
    clientVersion?: string | null
    ipAddress?: string | null
    command?: string | null
    commandResult?: string | null
  }

  export type AdminLogUncheckedCreateInput = {
    id?: number
    timestamp?: Date | string
    eventType: string
    keyName?: string | null
    appId?: number | null
    appName?: string | null
    clientName?: string | null
    clientVersion?: string | null
    ipAddress?: string | null
    command?: string | null
    commandResult?: string | null
  }

  export type AdminLogUpdateInput = {
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    eventType?: StringFieldUpdateOperationsInput | string
    keyName?: NullableStringFieldUpdateOperationsInput | string | null
    appId?: NullableIntFieldUpdateOperationsInput | number | null
    appName?: NullableStringFieldUpdateOperationsInput | string | null
    clientName?: NullableStringFieldUpdateOperationsInput | string | null
    clientVersion?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    command?: NullableStringFieldUpdateOperationsInput | string | null
    commandResult?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AdminLogUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    eventType?: StringFieldUpdateOperationsInput | string
    keyName?: NullableStringFieldUpdateOperationsInput | string | null
    appId?: NullableIntFieldUpdateOperationsInput | number | null
    appName?: NullableStringFieldUpdateOperationsInput | string | null
    clientName?: NullableStringFieldUpdateOperationsInput | string | null
    clientVersion?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    command?: NullableStringFieldUpdateOperationsInput | string | null
    commandResult?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AdminLogCreateManyInput = {
    id?: number
    timestamp?: Date | string
    eventType: string
    keyName?: string | null
    appId?: number | null
    appName?: string | null
    clientName?: string | null
    clientVersion?: string | null
    ipAddress?: string | null
    command?: string | null
    commandResult?: string | null
  }

  export type AdminLogUpdateManyMutationInput = {
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    eventType?: StringFieldUpdateOperationsInput | string
    keyName?: NullableStringFieldUpdateOperationsInput | string | null
    appId?: NullableIntFieldUpdateOperationsInput | number | null
    appName?: NullableStringFieldUpdateOperationsInput | string | null
    clientName?: NullableStringFieldUpdateOperationsInput | string | null
    clientVersion?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    command?: NullableStringFieldUpdateOperationsInput | string | null
    commandResult?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AdminLogUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    eventType?: StringFieldUpdateOperationsInput | string
    keyName?: NullableStringFieldUpdateOperationsInput | string | null
    appId?: NullableIntFieldUpdateOperationsInput | number | null
    appName?: NullableStringFieldUpdateOperationsInput | string | null
    clientName?: NullableStringFieldUpdateOperationsInput | string | null
    clientVersion?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    command?: NullableStringFieldUpdateOperationsInput | string | null
    commandResult?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SettingCreateInput = {
    key: string
    value: string
  }

  export type SettingUncheckedCreateInput = {
    key: string
    value: string
  }

  export type SettingUpdateInput = {
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
  }

  export type SettingUncheckedUpdateInput = {
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
  }

  export type SettingCreateManyInput = {
    key: string
    value: string
  }

  export type SettingUpdateManyMutationInput = {
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
  }

  export type SettingUncheckedUpdateManyInput = {
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type KeyUserNullableScalarRelationFilter = {
    is?: KeyUserWhereInput | null
    isNot?: KeyUserWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type RequestCountOrderByAggregateInput = {
    id?: SortOrder
    keyName?: SortOrder
    createdAt?: SortOrder
    processedAt?: SortOrder
    requestId?: SortOrder
    remotePubkey?: SortOrder
    method?: SortOrder
    params?: SortOrder
    allowed?: SortOrder
    autoApproved?: SortOrder
    approvalType?: SortOrder
    keyUserId?: SortOrder
  }

  export type RequestAvgOrderByAggregateInput = {
    keyUserId?: SortOrder
  }

  export type RequestMaxOrderByAggregateInput = {
    id?: SortOrder
    keyName?: SortOrder
    createdAt?: SortOrder
    processedAt?: SortOrder
    requestId?: SortOrder
    remotePubkey?: SortOrder
    method?: SortOrder
    params?: SortOrder
    allowed?: SortOrder
    autoApproved?: SortOrder
    approvalType?: SortOrder
    keyUserId?: SortOrder
  }

  export type RequestMinOrderByAggregateInput = {
    id?: SortOrder
    keyName?: SortOrder
    createdAt?: SortOrder
    processedAt?: SortOrder
    requestId?: SortOrder
    remotePubkey?: SortOrder
    method?: SortOrder
    params?: SortOrder
    allowed?: SortOrder
    autoApproved?: SortOrder
    approvalType?: SortOrder
    keyUserId?: SortOrder
  }

  export type RequestSumOrderByAggregateInput = {
    keyUserId?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type LogListRelationFilter = {
    every?: LogWhereInput
    some?: LogWhereInput
    none?: LogWhereInput
  }

  export type SigningConditionListRelationFilter = {
    every?: SigningConditionWhereInput
    some?: SigningConditionWhereInput
    none?: SigningConditionWhereInput
  }

  export type TokenListRelationFilter = {
    every?: TokenWhereInput
    some?: TokenWhereInput
    none?: TokenWhereInput
  }

  export type RequestListRelationFilter = {
    every?: RequestWhereInput
    some?: RequestWhereInput
    none?: RequestWhereInput
  }

  export type LogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SigningConditionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TokenOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RequestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type KeyUserUnique_key_userCompoundUniqueInput = {
    keyName: string
    userPubkey: string
  }

  export type KeyUserCountOrderByAggregateInput = {
    id?: SortOrder
    keyName?: SortOrder
    userPubkey?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    revokedAt?: SortOrder
    suspendedAt?: SortOrder
    suspendUntil?: SortOrder
    lastUsedAt?: SortOrder
    description?: SortOrder
    trustLevel?: SortOrder
    nostrconnectRelays?: SortOrder
  }

  export type KeyUserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type KeyUserMaxOrderByAggregateInput = {
    id?: SortOrder
    keyName?: SortOrder
    userPubkey?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    revokedAt?: SortOrder
    suspendedAt?: SortOrder
    suspendUntil?: SortOrder
    lastUsedAt?: SortOrder
    description?: SortOrder
    trustLevel?: SortOrder
    nostrconnectRelays?: SortOrder
  }

  export type KeyUserMinOrderByAggregateInput = {
    id?: SortOrder
    keyName?: SortOrder
    userPubkey?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    revokedAt?: SortOrder
    suspendedAt?: SortOrder
    suspendUntil?: SortOrder
    lastUsedAt?: SortOrder
    description?: SortOrder
    trustLevel?: SortOrder
    nostrconnectRelays?: SortOrder
  }

  export type KeyUserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type KeyCountOrderByAggregateInput = {
    id?: SortOrder
    keyName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    pubkey?: SortOrder
  }

  export type KeyAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type KeyMaxOrderByAggregateInput = {
    id?: SortOrder
    keyName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    pubkey?: SortOrder
  }

  export type KeyMinOrderByAggregateInput = {
    id?: SortOrder
    keyName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    pubkey?: SortOrder
  }

  export type KeySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SigningConditionCountOrderByAggregateInput = {
    id?: SortOrder
    method?: SortOrder
    kind?: SortOrder
    content?: SortOrder
    keyUserKeyName?: SortOrder
    allowed?: SortOrder
    keyUserId?: SortOrder
  }

  export type SigningConditionAvgOrderByAggregateInput = {
    id?: SortOrder
    keyUserId?: SortOrder
  }

  export type SigningConditionMaxOrderByAggregateInput = {
    id?: SortOrder
    method?: SortOrder
    kind?: SortOrder
    content?: SortOrder
    keyUserKeyName?: SortOrder
    allowed?: SortOrder
    keyUserId?: SortOrder
  }

  export type SigningConditionMinOrderByAggregateInput = {
    id?: SortOrder
    method?: SortOrder
    kind?: SortOrder
    content?: SortOrder
    keyUserKeyName?: SortOrder
    allowed?: SortOrder
    keyUserId?: SortOrder
  }

  export type SigningConditionSumOrderByAggregateInput = {
    id?: SortOrder
    keyUserId?: SortOrder
  }

  export type LogCountOrderByAggregateInput = {
    id?: SortOrder
    timestamp?: SortOrder
    type?: SortOrder
    method?: SortOrder
    params?: SortOrder
    keyUserId?: SortOrder
    autoApproved?: SortOrder
    approvalType?: SortOrder
    keyName?: SortOrder
    remotePubkey?: SortOrder
  }

  export type LogAvgOrderByAggregateInput = {
    id?: SortOrder
    keyUserId?: SortOrder
  }

  export type LogMaxOrderByAggregateInput = {
    id?: SortOrder
    timestamp?: SortOrder
    type?: SortOrder
    method?: SortOrder
    params?: SortOrder
    keyUserId?: SortOrder
    autoApproved?: SortOrder
    approvalType?: SortOrder
    keyName?: SortOrder
    remotePubkey?: SortOrder
  }

  export type LogMinOrderByAggregateInput = {
    id?: SortOrder
    timestamp?: SortOrder
    type?: SortOrder
    method?: SortOrder
    params?: SortOrder
    keyUserId?: SortOrder
    autoApproved?: SortOrder
    approvalType?: SortOrder
    keyName?: SortOrder
    remotePubkey?: SortOrder
  }

  export type LogSumOrderByAggregateInput = {
    id?: SortOrder
    keyUserId?: SortOrder
  }

  export type PolicyRuleListRelationFilter = {
    every?: PolicyRuleWhereInput
    some?: PolicyRuleWhereInput
    none?: PolicyRuleWhereInput
  }

  export type PolicyRuleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PolicyCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    expiresAt?: SortOrder
    deletedAt?: SortOrder
    description?: SortOrder
  }

  export type PolicyAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PolicyMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    expiresAt?: SortOrder
    deletedAt?: SortOrder
    description?: SortOrder
  }

  export type PolicyMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    expiresAt?: SortOrder
    deletedAt?: SortOrder
    description?: SortOrder
  }

  export type PolicySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PolicyNullableScalarRelationFilter = {
    is?: PolicyWhereInput | null
    isNot?: PolicyWhereInput | null
  }

  export type PolicyRuleCountOrderByAggregateInput = {
    id?: SortOrder
    method?: SortOrder
    kind?: SortOrder
    maxUsageCount?: SortOrder
    currentUsageCount?: SortOrder
    policyId?: SortOrder
  }

  export type PolicyRuleAvgOrderByAggregateInput = {
    id?: SortOrder
    maxUsageCount?: SortOrder
    currentUsageCount?: SortOrder
    policyId?: SortOrder
  }

  export type PolicyRuleMaxOrderByAggregateInput = {
    id?: SortOrder
    method?: SortOrder
    kind?: SortOrder
    maxUsageCount?: SortOrder
    currentUsageCount?: SortOrder
    policyId?: SortOrder
  }

  export type PolicyRuleMinOrderByAggregateInput = {
    id?: SortOrder
    method?: SortOrder
    kind?: SortOrder
    maxUsageCount?: SortOrder
    currentUsageCount?: SortOrder
    policyId?: SortOrder
  }

  export type PolicyRuleSumOrderByAggregateInput = {
    id?: SortOrder
    maxUsageCount?: SortOrder
    currentUsageCount?: SortOrder
    policyId?: SortOrder
  }

  export type TokenCountOrderByAggregateInput = {
    id?: SortOrder
    keyName?: SortOrder
    token?: SortOrder
    clientName?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    expiresAt?: SortOrder
    redeemedAt?: SortOrder
    keyUserId?: SortOrder
    policyId?: SortOrder
  }

  export type TokenAvgOrderByAggregateInput = {
    id?: SortOrder
    keyUserId?: SortOrder
    policyId?: SortOrder
  }

  export type TokenMaxOrderByAggregateInput = {
    id?: SortOrder
    keyName?: SortOrder
    token?: SortOrder
    clientName?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    expiresAt?: SortOrder
    redeemedAt?: SortOrder
    keyUserId?: SortOrder
    policyId?: SortOrder
  }

  export type TokenMinOrderByAggregateInput = {
    id?: SortOrder
    keyName?: SortOrder
    token?: SortOrder
    clientName?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    expiresAt?: SortOrder
    redeemedAt?: SortOrder
    keyUserId?: SortOrder
    policyId?: SortOrder
  }

  export type TokenSumOrderByAggregateInput = {
    id?: SortOrder
    keyUserId?: SortOrder
    policyId?: SortOrder
  }

  export type ConnectionTokenCountOrderByAggregateInput = {
    id?: SortOrder
    keyName?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
    redeemedAt?: SortOrder
  }

  export type ConnectionTokenAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ConnectionTokenMaxOrderByAggregateInput = {
    id?: SortOrder
    keyName?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
    redeemedAt?: SortOrder
  }

  export type ConnectionTokenMinOrderByAggregateInput = {
    id?: SortOrder
    keyName?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
    redeemedAt?: SortOrder
  }

  export type ConnectionTokenSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AdminLogCountOrderByAggregateInput = {
    id?: SortOrder
    timestamp?: SortOrder
    eventType?: SortOrder
    keyName?: SortOrder
    appId?: SortOrder
    appName?: SortOrder
    clientName?: SortOrder
    clientVersion?: SortOrder
    ipAddress?: SortOrder
    command?: SortOrder
    commandResult?: SortOrder
  }

  export type AdminLogAvgOrderByAggregateInput = {
    id?: SortOrder
    appId?: SortOrder
  }

  export type AdminLogMaxOrderByAggregateInput = {
    id?: SortOrder
    timestamp?: SortOrder
    eventType?: SortOrder
    keyName?: SortOrder
    appId?: SortOrder
    appName?: SortOrder
    clientName?: SortOrder
    clientVersion?: SortOrder
    ipAddress?: SortOrder
    command?: SortOrder
    commandResult?: SortOrder
  }

  export type AdminLogMinOrderByAggregateInput = {
    id?: SortOrder
    timestamp?: SortOrder
    eventType?: SortOrder
    keyName?: SortOrder
    appId?: SortOrder
    appName?: SortOrder
    clientName?: SortOrder
    clientVersion?: SortOrder
    ipAddress?: SortOrder
    command?: SortOrder
    commandResult?: SortOrder
  }

  export type AdminLogSumOrderByAggregateInput = {
    id?: SortOrder
    appId?: SortOrder
  }

  export type SettingCountOrderByAggregateInput = {
    key?: SortOrder
    value?: SortOrder
  }

  export type SettingMaxOrderByAggregateInput = {
    key?: SortOrder
    value?: SortOrder
  }

  export type SettingMinOrderByAggregateInput = {
    key?: SortOrder
    value?: SortOrder
  }

  export type KeyUserCreateNestedOneWithoutRequestsInput = {
    create?: XOR<KeyUserCreateWithoutRequestsInput, KeyUserUncheckedCreateWithoutRequestsInput>
    connectOrCreate?: KeyUserCreateOrConnectWithoutRequestsInput
    connect?: KeyUserWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type KeyUserUpdateOneWithoutRequestsNestedInput = {
    create?: XOR<KeyUserCreateWithoutRequestsInput, KeyUserUncheckedCreateWithoutRequestsInput>
    connectOrCreate?: KeyUserCreateOrConnectWithoutRequestsInput
    upsert?: KeyUserUpsertWithoutRequestsInput
    disconnect?: KeyUserWhereInput | boolean
    delete?: KeyUserWhereInput | boolean
    connect?: KeyUserWhereUniqueInput
    update?: XOR<XOR<KeyUserUpdateToOneWithWhereWithoutRequestsInput, KeyUserUpdateWithoutRequestsInput>, KeyUserUncheckedUpdateWithoutRequestsInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type LogCreateNestedManyWithoutKeyUserInput = {
    create?: XOR<LogCreateWithoutKeyUserInput, LogUncheckedCreateWithoutKeyUserInput> | LogCreateWithoutKeyUserInput[] | LogUncheckedCreateWithoutKeyUserInput[]
    connectOrCreate?: LogCreateOrConnectWithoutKeyUserInput | LogCreateOrConnectWithoutKeyUserInput[]
    createMany?: LogCreateManyKeyUserInputEnvelope
    connect?: LogWhereUniqueInput | LogWhereUniqueInput[]
  }

  export type SigningConditionCreateNestedManyWithoutKeyUserInput = {
    create?: XOR<SigningConditionCreateWithoutKeyUserInput, SigningConditionUncheckedCreateWithoutKeyUserInput> | SigningConditionCreateWithoutKeyUserInput[] | SigningConditionUncheckedCreateWithoutKeyUserInput[]
    connectOrCreate?: SigningConditionCreateOrConnectWithoutKeyUserInput | SigningConditionCreateOrConnectWithoutKeyUserInput[]
    createMany?: SigningConditionCreateManyKeyUserInputEnvelope
    connect?: SigningConditionWhereUniqueInput | SigningConditionWhereUniqueInput[]
  }

  export type TokenCreateNestedManyWithoutKeyUserInput = {
    create?: XOR<TokenCreateWithoutKeyUserInput, TokenUncheckedCreateWithoutKeyUserInput> | TokenCreateWithoutKeyUserInput[] | TokenUncheckedCreateWithoutKeyUserInput[]
    connectOrCreate?: TokenCreateOrConnectWithoutKeyUserInput | TokenCreateOrConnectWithoutKeyUserInput[]
    createMany?: TokenCreateManyKeyUserInputEnvelope
    connect?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
  }

  export type RequestCreateNestedManyWithoutKeyUserInput = {
    create?: XOR<RequestCreateWithoutKeyUserInput, RequestUncheckedCreateWithoutKeyUserInput> | RequestCreateWithoutKeyUserInput[] | RequestUncheckedCreateWithoutKeyUserInput[]
    connectOrCreate?: RequestCreateOrConnectWithoutKeyUserInput | RequestCreateOrConnectWithoutKeyUserInput[]
    createMany?: RequestCreateManyKeyUserInputEnvelope
    connect?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
  }

  export type LogUncheckedCreateNestedManyWithoutKeyUserInput = {
    create?: XOR<LogCreateWithoutKeyUserInput, LogUncheckedCreateWithoutKeyUserInput> | LogCreateWithoutKeyUserInput[] | LogUncheckedCreateWithoutKeyUserInput[]
    connectOrCreate?: LogCreateOrConnectWithoutKeyUserInput | LogCreateOrConnectWithoutKeyUserInput[]
    createMany?: LogCreateManyKeyUserInputEnvelope
    connect?: LogWhereUniqueInput | LogWhereUniqueInput[]
  }

  export type SigningConditionUncheckedCreateNestedManyWithoutKeyUserInput = {
    create?: XOR<SigningConditionCreateWithoutKeyUserInput, SigningConditionUncheckedCreateWithoutKeyUserInput> | SigningConditionCreateWithoutKeyUserInput[] | SigningConditionUncheckedCreateWithoutKeyUserInput[]
    connectOrCreate?: SigningConditionCreateOrConnectWithoutKeyUserInput | SigningConditionCreateOrConnectWithoutKeyUserInput[]
    createMany?: SigningConditionCreateManyKeyUserInputEnvelope
    connect?: SigningConditionWhereUniqueInput | SigningConditionWhereUniqueInput[]
  }

  export type TokenUncheckedCreateNestedManyWithoutKeyUserInput = {
    create?: XOR<TokenCreateWithoutKeyUserInput, TokenUncheckedCreateWithoutKeyUserInput> | TokenCreateWithoutKeyUserInput[] | TokenUncheckedCreateWithoutKeyUserInput[]
    connectOrCreate?: TokenCreateOrConnectWithoutKeyUserInput | TokenCreateOrConnectWithoutKeyUserInput[]
    createMany?: TokenCreateManyKeyUserInputEnvelope
    connect?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
  }

  export type RequestUncheckedCreateNestedManyWithoutKeyUserInput = {
    create?: XOR<RequestCreateWithoutKeyUserInput, RequestUncheckedCreateWithoutKeyUserInput> | RequestCreateWithoutKeyUserInput[] | RequestUncheckedCreateWithoutKeyUserInput[]
    connectOrCreate?: RequestCreateOrConnectWithoutKeyUserInput | RequestCreateOrConnectWithoutKeyUserInput[]
    createMany?: RequestCreateManyKeyUserInputEnvelope
    connect?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
  }

  export type LogUpdateManyWithoutKeyUserNestedInput = {
    create?: XOR<LogCreateWithoutKeyUserInput, LogUncheckedCreateWithoutKeyUserInput> | LogCreateWithoutKeyUserInput[] | LogUncheckedCreateWithoutKeyUserInput[]
    connectOrCreate?: LogCreateOrConnectWithoutKeyUserInput | LogCreateOrConnectWithoutKeyUserInput[]
    upsert?: LogUpsertWithWhereUniqueWithoutKeyUserInput | LogUpsertWithWhereUniqueWithoutKeyUserInput[]
    createMany?: LogCreateManyKeyUserInputEnvelope
    set?: LogWhereUniqueInput | LogWhereUniqueInput[]
    disconnect?: LogWhereUniqueInput | LogWhereUniqueInput[]
    delete?: LogWhereUniqueInput | LogWhereUniqueInput[]
    connect?: LogWhereUniqueInput | LogWhereUniqueInput[]
    update?: LogUpdateWithWhereUniqueWithoutKeyUserInput | LogUpdateWithWhereUniqueWithoutKeyUserInput[]
    updateMany?: LogUpdateManyWithWhereWithoutKeyUserInput | LogUpdateManyWithWhereWithoutKeyUserInput[]
    deleteMany?: LogScalarWhereInput | LogScalarWhereInput[]
  }

  export type SigningConditionUpdateManyWithoutKeyUserNestedInput = {
    create?: XOR<SigningConditionCreateWithoutKeyUserInput, SigningConditionUncheckedCreateWithoutKeyUserInput> | SigningConditionCreateWithoutKeyUserInput[] | SigningConditionUncheckedCreateWithoutKeyUserInput[]
    connectOrCreate?: SigningConditionCreateOrConnectWithoutKeyUserInput | SigningConditionCreateOrConnectWithoutKeyUserInput[]
    upsert?: SigningConditionUpsertWithWhereUniqueWithoutKeyUserInput | SigningConditionUpsertWithWhereUniqueWithoutKeyUserInput[]
    createMany?: SigningConditionCreateManyKeyUserInputEnvelope
    set?: SigningConditionWhereUniqueInput | SigningConditionWhereUniqueInput[]
    disconnect?: SigningConditionWhereUniqueInput | SigningConditionWhereUniqueInput[]
    delete?: SigningConditionWhereUniqueInput | SigningConditionWhereUniqueInput[]
    connect?: SigningConditionWhereUniqueInput | SigningConditionWhereUniqueInput[]
    update?: SigningConditionUpdateWithWhereUniqueWithoutKeyUserInput | SigningConditionUpdateWithWhereUniqueWithoutKeyUserInput[]
    updateMany?: SigningConditionUpdateManyWithWhereWithoutKeyUserInput | SigningConditionUpdateManyWithWhereWithoutKeyUserInput[]
    deleteMany?: SigningConditionScalarWhereInput | SigningConditionScalarWhereInput[]
  }

  export type TokenUpdateManyWithoutKeyUserNestedInput = {
    create?: XOR<TokenCreateWithoutKeyUserInput, TokenUncheckedCreateWithoutKeyUserInput> | TokenCreateWithoutKeyUserInput[] | TokenUncheckedCreateWithoutKeyUserInput[]
    connectOrCreate?: TokenCreateOrConnectWithoutKeyUserInput | TokenCreateOrConnectWithoutKeyUserInput[]
    upsert?: TokenUpsertWithWhereUniqueWithoutKeyUserInput | TokenUpsertWithWhereUniqueWithoutKeyUserInput[]
    createMany?: TokenCreateManyKeyUserInputEnvelope
    set?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    disconnect?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    delete?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    connect?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    update?: TokenUpdateWithWhereUniqueWithoutKeyUserInput | TokenUpdateWithWhereUniqueWithoutKeyUserInput[]
    updateMany?: TokenUpdateManyWithWhereWithoutKeyUserInput | TokenUpdateManyWithWhereWithoutKeyUserInput[]
    deleteMany?: TokenScalarWhereInput | TokenScalarWhereInput[]
  }

  export type RequestUpdateManyWithoutKeyUserNestedInput = {
    create?: XOR<RequestCreateWithoutKeyUserInput, RequestUncheckedCreateWithoutKeyUserInput> | RequestCreateWithoutKeyUserInput[] | RequestUncheckedCreateWithoutKeyUserInput[]
    connectOrCreate?: RequestCreateOrConnectWithoutKeyUserInput | RequestCreateOrConnectWithoutKeyUserInput[]
    upsert?: RequestUpsertWithWhereUniqueWithoutKeyUserInput | RequestUpsertWithWhereUniqueWithoutKeyUserInput[]
    createMany?: RequestCreateManyKeyUserInputEnvelope
    set?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    disconnect?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    delete?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    connect?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    update?: RequestUpdateWithWhereUniqueWithoutKeyUserInput | RequestUpdateWithWhereUniqueWithoutKeyUserInput[]
    updateMany?: RequestUpdateManyWithWhereWithoutKeyUserInput | RequestUpdateManyWithWhereWithoutKeyUserInput[]
    deleteMany?: RequestScalarWhereInput | RequestScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type LogUncheckedUpdateManyWithoutKeyUserNestedInput = {
    create?: XOR<LogCreateWithoutKeyUserInput, LogUncheckedCreateWithoutKeyUserInput> | LogCreateWithoutKeyUserInput[] | LogUncheckedCreateWithoutKeyUserInput[]
    connectOrCreate?: LogCreateOrConnectWithoutKeyUserInput | LogCreateOrConnectWithoutKeyUserInput[]
    upsert?: LogUpsertWithWhereUniqueWithoutKeyUserInput | LogUpsertWithWhereUniqueWithoutKeyUserInput[]
    createMany?: LogCreateManyKeyUserInputEnvelope
    set?: LogWhereUniqueInput | LogWhereUniqueInput[]
    disconnect?: LogWhereUniqueInput | LogWhereUniqueInput[]
    delete?: LogWhereUniqueInput | LogWhereUniqueInput[]
    connect?: LogWhereUniqueInput | LogWhereUniqueInput[]
    update?: LogUpdateWithWhereUniqueWithoutKeyUserInput | LogUpdateWithWhereUniqueWithoutKeyUserInput[]
    updateMany?: LogUpdateManyWithWhereWithoutKeyUserInput | LogUpdateManyWithWhereWithoutKeyUserInput[]
    deleteMany?: LogScalarWhereInput | LogScalarWhereInput[]
  }

  export type SigningConditionUncheckedUpdateManyWithoutKeyUserNestedInput = {
    create?: XOR<SigningConditionCreateWithoutKeyUserInput, SigningConditionUncheckedCreateWithoutKeyUserInput> | SigningConditionCreateWithoutKeyUserInput[] | SigningConditionUncheckedCreateWithoutKeyUserInput[]
    connectOrCreate?: SigningConditionCreateOrConnectWithoutKeyUserInput | SigningConditionCreateOrConnectWithoutKeyUserInput[]
    upsert?: SigningConditionUpsertWithWhereUniqueWithoutKeyUserInput | SigningConditionUpsertWithWhereUniqueWithoutKeyUserInput[]
    createMany?: SigningConditionCreateManyKeyUserInputEnvelope
    set?: SigningConditionWhereUniqueInput | SigningConditionWhereUniqueInput[]
    disconnect?: SigningConditionWhereUniqueInput | SigningConditionWhereUniqueInput[]
    delete?: SigningConditionWhereUniqueInput | SigningConditionWhereUniqueInput[]
    connect?: SigningConditionWhereUniqueInput | SigningConditionWhereUniqueInput[]
    update?: SigningConditionUpdateWithWhereUniqueWithoutKeyUserInput | SigningConditionUpdateWithWhereUniqueWithoutKeyUserInput[]
    updateMany?: SigningConditionUpdateManyWithWhereWithoutKeyUserInput | SigningConditionUpdateManyWithWhereWithoutKeyUserInput[]
    deleteMany?: SigningConditionScalarWhereInput | SigningConditionScalarWhereInput[]
  }

  export type TokenUncheckedUpdateManyWithoutKeyUserNestedInput = {
    create?: XOR<TokenCreateWithoutKeyUserInput, TokenUncheckedCreateWithoutKeyUserInput> | TokenCreateWithoutKeyUserInput[] | TokenUncheckedCreateWithoutKeyUserInput[]
    connectOrCreate?: TokenCreateOrConnectWithoutKeyUserInput | TokenCreateOrConnectWithoutKeyUserInput[]
    upsert?: TokenUpsertWithWhereUniqueWithoutKeyUserInput | TokenUpsertWithWhereUniqueWithoutKeyUserInput[]
    createMany?: TokenCreateManyKeyUserInputEnvelope
    set?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    disconnect?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    delete?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    connect?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    update?: TokenUpdateWithWhereUniqueWithoutKeyUserInput | TokenUpdateWithWhereUniqueWithoutKeyUserInput[]
    updateMany?: TokenUpdateManyWithWhereWithoutKeyUserInput | TokenUpdateManyWithWhereWithoutKeyUserInput[]
    deleteMany?: TokenScalarWhereInput | TokenScalarWhereInput[]
  }

  export type RequestUncheckedUpdateManyWithoutKeyUserNestedInput = {
    create?: XOR<RequestCreateWithoutKeyUserInput, RequestUncheckedCreateWithoutKeyUserInput> | RequestCreateWithoutKeyUserInput[] | RequestUncheckedCreateWithoutKeyUserInput[]
    connectOrCreate?: RequestCreateOrConnectWithoutKeyUserInput | RequestCreateOrConnectWithoutKeyUserInput[]
    upsert?: RequestUpsertWithWhereUniqueWithoutKeyUserInput | RequestUpsertWithWhereUniqueWithoutKeyUserInput[]
    createMany?: RequestCreateManyKeyUserInputEnvelope
    set?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    disconnect?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    delete?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    connect?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    update?: RequestUpdateWithWhereUniqueWithoutKeyUserInput | RequestUpdateWithWhereUniqueWithoutKeyUserInput[]
    updateMany?: RequestUpdateManyWithWhereWithoutKeyUserInput | RequestUpdateManyWithWhereWithoutKeyUserInput[]
    deleteMany?: RequestScalarWhereInput | RequestScalarWhereInput[]
  }

  export type KeyUserCreateNestedOneWithoutSigningConditionsInput = {
    create?: XOR<KeyUserCreateWithoutSigningConditionsInput, KeyUserUncheckedCreateWithoutSigningConditionsInput>
    connectOrCreate?: KeyUserCreateOrConnectWithoutSigningConditionsInput
    connect?: KeyUserWhereUniqueInput
  }

  export type KeyUserUpdateOneWithoutSigningConditionsNestedInput = {
    create?: XOR<KeyUserCreateWithoutSigningConditionsInput, KeyUserUncheckedCreateWithoutSigningConditionsInput>
    connectOrCreate?: KeyUserCreateOrConnectWithoutSigningConditionsInput
    upsert?: KeyUserUpsertWithoutSigningConditionsInput
    disconnect?: KeyUserWhereInput | boolean
    delete?: KeyUserWhereInput | boolean
    connect?: KeyUserWhereUniqueInput
    update?: XOR<XOR<KeyUserUpdateToOneWithWhereWithoutSigningConditionsInput, KeyUserUpdateWithoutSigningConditionsInput>, KeyUserUncheckedUpdateWithoutSigningConditionsInput>
  }

  export type KeyUserCreateNestedOneWithoutLogsInput = {
    create?: XOR<KeyUserCreateWithoutLogsInput, KeyUserUncheckedCreateWithoutLogsInput>
    connectOrCreate?: KeyUserCreateOrConnectWithoutLogsInput
    connect?: KeyUserWhereUniqueInput
  }

  export type KeyUserUpdateOneWithoutLogsNestedInput = {
    create?: XOR<KeyUserCreateWithoutLogsInput, KeyUserUncheckedCreateWithoutLogsInput>
    connectOrCreate?: KeyUserCreateOrConnectWithoutLogsInput
    upsert?: KeyUserUpsertWithoutLogsInput
    disconnect?: KeyUserWhereInput | boolean
    delete?: KeyUserWhereInput | boolean
    connect?: KeyUserWhereUniqueInput
    update?: XOR<XOR<KeyUserUpdateToOneWithWhereWithoutLogsInput, KeyUserUpdateWithoutLogsInput>, KeyUserUncheckedUpdateWithoutLogsInput>
  }

  export type PolicyRuleCreateNestedManyWithoutPolicyInput = {
    create?: XOR<PolicyRuleCreateWithoutPolicyInput, PolicyRuleUncheckedCreateWithoutPolicyInput> | PolicyRuleCreateWithoutPolicyInput[] | PolicyRuleUncheckedCreateWithoutPolicyInput[]
    connectOrCreate?: PolicyRuleCreateOrConnectWithoutPolicyInput | PolicyRuleCreateOrConnectWithoutPolicyInput[]
    createMany?: PolicyRuleCreateManyPolicyInputEnvelope
    connect?: PolicyRuleWhereUniqueInput | PolicyRuleWhereUniqueInput[]
  }

  export type TokenCreateNestedManyWithoutPolicyInput = {
    create?: XOR<TokenCreateWithoutPolicyInput, TokenUncheckedCreateWithoutPolicyInput> | TokenCreateWithoutPolicyInput[] | TokenUncheckedCreateWithoutPolicyInput[]
    connectOrCreate?: TokenCreateOrConnectWithoutPolicyInput | TokenCreateOrConnectWithoutPolicyInput[]
    createMany?: TokenCreateManyPolicyInputEnvelope
    connect?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
  }

  export type PolicyRuleUncheckedCreateNestedManyWithoutPolicyInput = {
    create?: XOR<PolicyRuleCreateWithoutPolicyInput, PolicyRuleUncheckedCreateWithoutPolicyInput> | PolicyRuleCreateWithoutPolicyInput[] | PolicyRuleUncheckedCreateWithoutPolicyInput[]
    connectOrCreate?: PolicyRuleCreateOrConnectWithoutPolicyInput | PolicyRuleCreateOrConnectWithoutPolicyInput[]
    createMany?: PolicyRuleCreateManyPolicyInputEnvelope
    connect?: PolicyRuleWhereUniqueInput | PolicyRuleWhereUniqueInput[]
  }

  export type TokenUncheckedCreateNestedManyWithoutPolicyInput = {
    create?: XOR<TokenCreateWithoutPolicyInput, TokenUncheckedCreateWithoutPolicyInput> | TokenCreateWithoutPolicyInput[] | TokenUncheckedCreateWithoutPolicyInput[]
    connectOrCreate?: TokenCreateOrConnectWithoutPolicyInput | TokenCreateOrConnectWithoutPolicyInput[]
    createMany?: TokenCreateManyPolicyInputEnvelope
    connect?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
  }

  export type PolicyRuleUpdateManyWithoutPolicyNestedInput = {
    create?: XOR<PolicyRuleCreateWithoutPolicyInput, PolicyRuleUncheckedCreateWithoutPolicyInput> | PolicyRuleCreateWithoutPolicyInput[] | PolicyRuleUncheckedCreateWithoutPolicyInput[]
    connectOrCreate?: PolicyRuleCreateOrConnectWithoutPolicyInput | PolicyRuleCreateOrConnectWithoutPolicyInput[]
    upsert?: PolicyRuleUpsertWithWhereUniqueWithoutPolicyInput | PolicyRuleUpsertWithWhereUniqueWithoutPolicyInput[]
    createMany?: PolicyRuleCreateManyPolicyInputEnvelope
    set?: PolicyRuleWhereUniqueInput | PolicyRuleWhereUniqueInput[]
    disconnect?: PolicyRuleWhereUniqueInput | PolicyRuleWhereUniqueInput[]
    delete?: PolicyRuleWhereUniqueInput | PolicyRuleWhereUniqueInput[]
    connect?: PolicyRuleWhereUniqueInput | PolicyRuleWhereUniqueInput[]
    update?: PolicyRuleUpdateWithWhereUniqueWithoutPolicyInput | PolicyRuleUpdateWithWhereUniqueWithoutPolicyInput[]
    updateMany?: PolicyRuleUpdateManyWithWhereWithoutPolicyInput | PolicyRuleUpdateManyWithWhereWithoutPolicyInput[]
    deleteMany?: PolicyRuleScalarWhereInput | PolicyRuleScalarWhereInput[]
  }

  export type TokenUpdateManyWithoutPolicyNestedInput = {
    create?: XOR<TokenCreateWithoutPolicyInput, TokenUncheckedCreateWithoutPolicyInput> | TokenCreateWithoutPolicyInput[] | TokenUncheckedCreateWithoutPolicyInput[]
    connectOrCreate?: TokenCreateOrConnectWithoutPolicyInput | TokenCreateOrConnectWithoutPolicyInput[]
    upsert?: TokenUpsertWithWhereUniqueWithoutPolicyInput | TokenUpsertWithWhereUniqueWithoutPolicyInput[]
    createMany?: TokenCreateManyPolicyInputEnvelope
    set?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    disconnect?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    delete?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    connect?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    update?: TokenUpdateWithWhereUniqueWithoutPolicyInput | TokenUpdateWithWhereUniqueWithoutPolicyInput[]
    updateMany?: TokenUpdateManyWithWhereWithoutPolicyInput | TokenUpdateManyWithWhereWithoutPolicyInput[]
    deleteMany?: TokenScalarWhereInput | TokenScalarWhereInput[]
  }

  export type PolicyRuleUncheckedUpdateManyWithoutPolicyNestedInput = {
    create?: XOR<PolicyRuleCreateWithoutPolicyInput, PolicyRuleUncheckedCreateWithoutPolicyInput> | PolicyRuleCreateWithoutPolicyInput[] | PolicyRuleUncheckedCreateWithoutPolicyInput[]
    connectOrCreate?: PolicyRuleCreateOrConnectWithoutPolicyInput | PolicyRuleCreateOrConnectWithoutPolicyInput[]
    upsert?: PolicyRuleUpsertWithWhereUniqueWithoutPolicyInput | PolicyRuleUpsertWithWhereUniqueWithoutPolicyInput[]
    createMany?: PolicyRuleCreateManyPolicyInputEnvelope
    set?: PolicyRuleWhereUniqueInput | PolicyRuleWhereUniqueInput[]
    disconnect?: PolicyRuleWhereUniqueInput | PolicyRuleWhereUniqueInput[]
    delete?: PolicyRuleWhereUniqueInput | PolicyRuleWhereUniqueInput[]
    connect?: PolicyRuleWhereUniqueInput | PolicyRuleWhereUniqueInput[]
    update?: PolicyRuleUpdateWithWhereUniqueWithoutPolicyInput | PolicyRuleUpdateWithWhereUniqueWithoutPolicyInput[]
    updateMany?: PolicyRuleUpdateManyWithWhereWithoutPolicyInput | PolicyRuleUpdateManyWithWhereWithoutPolicyInput[]
    deleteMany?: PolicyRuleScalarWhereInput | PolicyRuleScalarWhereInput[]
  }

  export type TokenUncheckedUpdateManyWithoutPolicyNestedInput = {
    create?: XOR<TokenCreateWithoutPolicyInput, TokenUncheckedCreateWithoutPolicyInput> | TokenCreateWithoutPolicyInput[] | TokenUncheckedCreateWithoutPolicyInput[]
    connectOrCreate?: TokenCreateOrConnectWithoutPolicyInput | TokenCreateOrConnectWithoutPolicyInput[]
    upsert?: TokenUpsertWithWhereUniqueWithoutPolicyInput | TokenUpsertWithWhereUniqueWithoutPolicyInput[]
    createMany?: TokenCreateManyPolicyInputEnvelope
    set?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    disconnect?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    delete?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    connect?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    update?: TokenUpdateWithWhereUniqueWithoutPolicyInput | TokenUpdateWithWhereUniqueWithoutPolicyInput[]
    updateMany?: TokenUpdateManyWithWhereWithoutPolicyInput | TokenUpdateManyWithWhereWithoutPolicyInput[]
    deleteMany?: TokenScalarWhereInput | TokenScalarWhereInput[]
  }

  export type PolicyCreateNestedOneWithoutRulesInput = {
    create?: XOR<PolicyCreateWithoutRulesInput, PolicyUncheckedCreateWithoutRulesInput>
    connectOrCreate?: PolicyCreateOrConnectWithoutRulesInput
    connect?: PolicyWhereUniqueInput
  }

  export type PolicyUpdateOneWithoutRulesNestedInput = {
    create?: XOR<PolicyCreateWithoutRulesInput, PolicyUncheckedCreateWithoutRulesInput>
    connectOrCreate?: PolicyCreateOrConnectWithoutRulesInput
    upsert?: PolicyUpsertWithoutRulesInput
    disconnect?: PolicyWhereInput | boolean
    delete?: PolicyWhereInput | boolean
    connect?: PolicyWhereUniqueInput
    update?: XOR<XOR<PolicyUpdateToOneWithWhereWithoutRulesInput, PolicyUpdateWithoutRulesInput>, PolicyUncheckedUpdateWithoutRulesInput>
  }

  export type PolicyCreateNestedOneWithoutTokenInput = {
    create?: XOR<PolicyCreateWithoutTokenInput, PolicyUncheckedCreateWithoutTokenInput>
    connectOrCreate?: PolicyCreateOrConnectWithoutTokenInput
    connect?: PolicyWhereUniqueInput
  }

  export type KeyUserCreateNestedOneWithoutTokenInput = {
    create?: XOR<KeyUserCreateWithoutTokenInput, KeyUserUncheckedCreateWithoutTokenInput>
    connectOrCreate?: KeyUserCreateOrConnectWithoutTokenInput
    connect?: KeyUserWhereUniqueInput
  }

  export type PolicyUpdateOneWithoutTokenNestedInput = {
    create?: XOR<PolicyCreateWithoutTokenInput, PolicyUncheckedCreateWithoutTokenInput>
    connectOrCreate?: PolicyCreateOrConnectWithoutTokenInput
    upsert?: PolicyUpsertWithoutTokenInput
    disconnect?: PolicyWhereInput | boolean
    delete?: PolicyWhereInput | boolean
    connect?: PolicyWhereUniqueInput
    update?: XOR<XOR<PolicyUpdateToOneWithWhereWithoutTokenInput, PolicyUpdateWithoutTokenInput>, PolicyUncheckedUpdateWithoutTokenInput>
  }

  export type KeyUserUpdateOneWithoutTokenNestedInput = {
    create?: XOR<KeyUserCreateWithoutTokenInput, KeyUserUncheckedCreateWithoutTokenInput>
    connectOrCreate?: KeyUserCreateOrConnectWithoutTokenInput
    upsert?: KeyUserUpsertWithoutTokenInput
    disconnect?: KeyUserWhereInput | boolean
    delete?: KeyUserWhereInput | boolean
    connect?: KeyUserWhereUniqueInput
    update?: XOR<XOR<KeyUserUpdateToOneWithWhereWithoutTokenInput, KeyUserUpdateWithoutTokenInput>, KeyUserUncheckedUpdateWithoutTokenInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type KeyUserCreateWithoutRequestsInput = {
    keyName: string
    userPubkey: string
    createdAt?: Date | string
    updatedAt?: Date | string
    revokedAt?: Date | string | null
    suspendedAt?: Date | string | null
    suspendUntil?: Date | string | null
    lastUsedAt?: Date | string | null
    description?: string | null
    trustLevel?: string
    nostrconnectRelays?: string | null
    logs?: LogCreateNestedManyWithoutKeyUserInput
    signingConditions?: SigningConditionCreateNestedManyWithoutKeyUserInput
    Token?: TokenCreateNestedManyWithoutKeyUserInput
  }

  export type KeyUserUncheckedCreateWithoutRequestsInput = {
    id?: number
    keyName: string
    userPubkey: string
    createdAt?: Date | string
    updatedAt?: Date | string
    revokedAt?: Date | string | null
    suspendedAt?: Date | string | null
    suspendUntil?: Date | string | null
    lastUsedAt?: Date | string | null
    description?: string | null
    trustLevel?: string
    nostrconnectRelays?: string | null
    logs?: LogUncheckedCreateNestedManyWithoutKeyUserInput
    signingConditions?: SigningConditionUncheckedCreateNestedManyWithoutKeyUserInput
    Token?: TokenUncheckedCreateNestedManyWithoutKeyUserInput
  }

  export type KeyUserCreateOrConnectWithoutRequestsInput = {
    where: KeyUserWhereUniqueInput
    create: XOR<KeyUserCreateWithoutRequestsInput, KeyUserUncheckedCreateWithoutRequestsInput>
  }

  export type KeyUserUpsertWithoutRequestsInput = {
    update: XOR<KeyUserUpdateWithoutRequestsInput, KeyUserUncheckedUpdateWithoutRequestsInput>
    create: XOR<KeyUserCreateWithoutRequestsInput, KeyUserUncheckedCreateWithoutRequestsInput>
    where?: KeyUserWhereInput
  }

  export type KeyUserUpdateToOneWithWhereWithoutRequestsInput = {
    where?: KeyUserWhereInput
    data: XOR<KeyUserUpdateWithoutRequestsInput, KeyUserUncheckedUpdateWithoutRequestsInput>
  }

  export type KeyUserUpdateWithoutRequestsInput = {
    keyName?: StringFieldUpdateOperationsInput | string
    userPubkey?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    suspendedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    suspendUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastUsedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    trustLevel?: StringFieldUpdateOperationsInput | string
    nostrconnectRelays?: NullableStringFieldUpdateOperationsInput | string | null
    logs?: LogUpdateManyWithoutKeyUserNestedInput
    signingConditions?: SigningConditionUpdateManyWithoutKeyUserNestedInput
    Token?: TokenUpdateManyWithoutKeyUserNestedInput
  }

  export type KeyUserUncheckedUpdateWithoutRequestsInput = {
    id?: IntFieldUpdateOperationsInput | number
    keyName?: StringFieldUpdateOperationsInput | string
    userPubkey?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    suspendedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    suspendUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastUsedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    trustLevel?: StringFieldUpdateOperationsInput | string
    nostrconnectRelays?: NullableStringFieldUpdateOperationsInput | string | null
    logs?: LogUncheckedUpdateManyWithoutKeyUserNestedInput
    signingConditions?: SigningConditionUncheckedUpdateManyWithoutKeyUserNestedInput
    Token?: TokenUncheckedUpdateManyWithoutKeyUserNestedInput
  }

  export type LogCreateWithoutKeyUserInput = {
    timestamp: Date | string
    type: string
    method?: string | null
    params?: string | null
    autoApproved?: boolean
    approvalType?: string | null
    keyName?: string | null
    remotePubkey?: string | null
  }

  export type LogUncheckedCreateWithoutKeyUserInput = {
    id?: number
    timestamp: Date | string
    type: string
    method?: string | null
    params?: string | null
    autoApproved?: boolean
    approvalType?: string | null
    keyName?: string | null
    remotePubkey?: string | null
  }

  export type LogCreateOrConnectWithoutKeyUserInput = {
    where: LogWhereUniqueInput
    create: XOR<LogCreateWithoutKeyUserInput, LogUncheckedCreateWithoutKeyUserInput>
  }

  export type LogCreateManyKeyUserInputEnvelope = {
    data: LogCreateManyKeyUserInput | LogCreateManyKeyUserInput[]
  }

  export type SigningConditionCreateWithoutKeyUserInput = {
    method?: string | null
    kind?: string | null
    content?: string | null
    keyUserKeyName?: string | null
    allowed?: boolean | null
  }

  export type SigningConditionUncheckedCreateWithoutKeyUserInput = {
    id?: number
    method?: string | null
    kind?: string | null
    content?: string | null
    keyUserKeyName?: string | null
    allowed?: boolean | null
  }

  export type SigningConditionCreateOrConnectWithoutKeyUserInput = {
    where: SigningConditionWhereUniqueInput
    create: XOR<SigningConditionCreateWithoutKeyUserInput, SigningConditionUncheckedCreateWithoutKeyUserInput>
  }

  export type SigningConditionCreateManyKeyUserInputEnvelope = {
    data: SigningConditionCreateManyKeyUserInput | SigningConditionCreateManyKeyUserInput[]
  }

  export type TokenCreateWithoutKeyUserInput = {
    keyName: string
    token: string
    clientName: string
    createdBy: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    expiresAt?: Date | string | null
    redeemedAt?: Date | string | null
    policy?: PolicyCreateNestedOneWithoutTokenInput
  }

  export type TokenUncheckedCreateWithoutKeyUserInput = {
    id?: number
    keyName: string
    token: string
    clientName: string
    createdBy: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    expiresAt?: Date | string | null
    redeemedAt?: Date | string | null
    policyId?: number | null
  }

  export type TokenCreateOrConnectWithoutKeyUserInput = {
    where: TokenWhereUniqueInput
    create: XOR<TokenCreateWithoutKeyUserInput, TokenUncheckedCreateWithoutKeyUserInput>
  }

  export type TokenCreateManyKeyUserInputEnvelope = {
    data: TokenCreateManyKeyUserInput | TokenCreateManyKeyUserInput[]
  }

  export type RequestCreateWithoutKeyUserInput = {
    id?: string
    keyName?: string | null
    createdAt?: Date | string
    processedAt?: Date | string | null
    requestId: string
    remotePubkey: string
    method: string
    params?: string | null
    allowed?: boolean | null
    autoApproved?: boolean
    approvalType?: string | null
  }

  export type RequestUncheckedCreateWithoutKeyUserInput = {
    id?: string
    keyName?: string | null
    createdAt?: Date | string
    processedAt?: Date | string | null
    requestId: string
    remotePubkey: string
    method: string
    params?: string | null
    allowed?: boolean | null
    autoApproved?: boolean
    approvalType?: string | null
  }

  export type RequestCreateOrConnectWithoutKeyUserInput = {
    where: RequestWhereUniqueInput
    create: XOR<RequestCreateWithoutKeyUserInput, RequestUncheckedCreateWithoutKeyUserInput>
  }

  export type RequestCreateManyKeyUserInputEnvelope = {
    data: RequestCreateManyKeyUserInput | RequestCreateManyKeyUserInput[]
  }

  export type LogUpsertWithWhereUniqueWithoutKeyUserInput = {
    where: LogWhereUniqueInput
    update: XOR<LogUpdateWithoutKeyUserInput, LogUncheckedUpdateWithoutKeyUserInput>
    create: XOR<LogCreateWithoutKeyUserInput, LogUncheckedCreateWithoutKeyUserInput>
  }

  export type LogUpdateWithWhereUniqueWithoutKeyUserInput = {
    where: LogWhereUniqueInput
    data: XOR<LogUpdateWithoutKeyUserInput, LogUncheckedUpdateWithoutKeyUserInput>
  }

  export type LogUpdateManyWithWhereWithoutKeyUserInput = {
    where: LogScalarWhereInput
    data: XOR<LogUpdateManyMutationInput, LogUncheckedUpdateManyWithoutKeyUserInput>
  }

  export type LogScalarWhereInput = {
    AND?: LogScalarWhereInput | LogScalarWhereInput[]
    OR?: LogScalarWhereInput[]
    NOT?: LogScalarWhereInput | LogScalarWhereInput[]
    id?: IntFilter<"Log"> | number
    timestamp?: DateTimeFilter<"Log"> | Date | string
    type?: StringFilter<"Log"> | string
    method?: StringNullableFilter<"Log"> | string | null
    params?: StringNullableFilter<"Log"> | string | null
    keyUserId?: IntNullableFilter<"Log"> | number | null
    autoApproved?: BoolFilter<"Log"> | boolean
    approvalType?: StringNullableFilter<"Log"> | string | null
    keyName?: StringNullableFilter<"Log"> | string | null
    remotePubkey?: StringNullableFilter<"Log"> | string | null
  }

  export type SigningConditionUpsertWithWhereUniqueWithoutKeyUserInput = {
    where: SigningConditionWhereUniqueInput
    update: XOR<SigningConditionUpdateWithoutKeyUserInput, SigningConditionUncheckedUpdateWithoutKeyUserInput>
    create: XOR<SigningConditionCreateWithoutKeyUserInput, SigningConditionUncheckedCreateWithoutKeyUserInput>
  }

  export type SigningConditionUpdateWithWhereUniqueWithoutKeyUserInput = {
    where: SigningConditionWhereUniqueInput
    data: XOR<SigningConditionUpdateWithoutKeyUserInput, SigningConditionUncheckedUpdateWithoutKeyUserInput>
  }

  export type SigningConditionUpdateManyWithWhereWithoutKeyUserInput = {
    where: SigningConditionScalarWhereInput
    data: XOR<SigningConditionUpdateManyMutationInput, SigningConditionUncheckedUpdateManyWithoutKeyUserInput>
  }

  export type SigningConditionScalarWhereInput = {
    AND?: SigningConditionScalarWhereInput | SigningConditionScalarWhereInput[]
    OR?: SigningConditionScalarWhereInput[]
    NOT?: SigningConditionScalarWhereInput | SigningConditionScalarWhereInput[]
    id?: IntFilter<"SigningCondition"> | number
    method?: StringNullableFilter<"SigningCondition"> | string | null
    kind?: StringNullableFilter<"SigningCondition"> | string | null
    content?: StringNullableFilter<"SigningCondition"> | string | null
    keyUserKeyName?: StringNullableFilter<"SigningCondition"> | string | null
    allowed?: BoolNullableFilter<"SigningCondition"> | boolean | null
    keyUserId?: IntNullableFilter<"SigningCondition"> | number | null
  }

  export type TokenUpsertWithWhereUniqueWithoutKeyUserInput = {
    where: TokenWhereUniqueInput
    update: XOR<TokenUpdateWithoutKeyUserInput, TokenUncheckedUpdateWithoutKeyUserInput>
    create: XOR<TokenCreateWithoutKeyUserInput, TokenUncheckedCreateWithoutKeyUserInput>
  }

  export type TokenUpdateWithWhereUniqueWithoutKeyUserInput = {
    where: TokenWhereUniqueInput
    data: XOR<TokenUpdateWithoutKeyUserInput, TokenUncheckedUpdateWithoutKeyUserInput>
  }

  export type TokenUpdateManyWithWhereWithoutKeyUserInput = {
    where: TokenScalarWhereInput
    data: XOR<TokenUpdateManyMutationInput, TokenUncheckedUpdateManyWithoutKeyUserInput>
  }

  export type TokenScalarWhereInput = {
    AND?: TokenScalarWhereInput | TokenScalarWhereInput[]
    OR?: TokenScalarWhereInput[]
    NOT?: TokenScalarWhereInput | TokenScalarWhereInput[]
    id?: IntFilter<"Token"> | number
    keyName?: StringFilter<"Token"> | string
    token?: StringFilter<"Token"> | string
    clientName?: StringFilter<"Token"> | string
    createdBy?: StringFilter<"Token"> | string
    createdAt?: DateTimeFilter<"Token"> | Date | string
    updatedAt?: DateTimeFilter<"Token"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Token"> | Date | string | null
    expiresAt?: DateTimeNullableFilter<"Token"> | Date | string | null
    redeemedAt?: DateTimeNullableFilter<"Token"> | Date | string | null
    keyUserId?: IntNullableFilter<"Token"> | number | null
    policyId?: IntNullableFilter<"Token"> | number | null
  }

  export type RequestUpsertWithWhereUniqueWithoutKeyUserInput = {
    where: RequestWhereUniqueInput
    update: XOR<RequestUpdateWithoutKeyUserInput, RequestUncheckedUpdateWithoutKeyUserInput>
    create: XOR<RequestCreateWithoutKeyUserInput, RequestUncheckedCreateWithoutKeyUserInput>
  }

  export type RequestUpdateWithWhereUniqueWithoutKeyUserInput = {
    where: RequestWhereUniqueInput
    data: XOR<RequestUpdateWithoutKeyUserInput, RequestUncheckedUpdateWithoutKeyUserInput>
  }

  export type RequestUpdateManyWithWhereWithoutKeyUserInput = {
    where: RequestScalarWhereInput
    data: XOR<RequestUpdateManyMutationInput, RequestUncheckedUpdateManyWithoutKeyUserInput>
  }

  export type RequestScalarWhereInput = {
    AND?: RequestScalarWhereInput | RequestScalarWhereInput[]
    OR?: RequestScalarWhereInput[]
    NOT?: RequestScalarWhereInput | RequestScalarWhereInput[]
    id?: StringFilter<"Request"> | string
    keyName?: StringNullableFilter<"Request"> | string | null
    createdAt?: DateTimeFilter<"Request"> | Date | string
    processedAt?: DateTimeNullableFilter<"Request"> | Date | string | null
    requestId?: StringFilter<"Request"> | string
    remotePubkey?: StringFilter<"Request"> | string
    method?: StringFilter<"Request"> | string
    params?: StringNullableFilter<"Request"> | string | null
    allowed?: BoolNullableFilter<"Request"> | boolean | null
    autoApproved?: BoolFilter<"Request"> | boolean
    approvalType?: StringNullableFilter<"Request"> | string | null
    keyUserId?: IntNullableFilter<"Request"> | number | null
  }

  export type KeyUserCreateWithoutSigningConditionsInput = {
    keyName: string
    userPubkey: string
    createdAt?: Date | string
    updatedAt?: Date | string
    revokedAt?: Date | string | null
    suspendedAt?: Date | string | null
    suspendUntil?: Date | string | null
    lastUsedAt?: Date | string | null
    description?: string | null
    trustLevel?: string
    nostrconnectRelays?: string | null
    logs?: LogCreateNestedManyWithoutKeyUserInput
    Token?: TokenCreateNestedManyWithoutKeyUserInput
    requests?: RequestCreateNestedManyWithoutKeyUserInput
  }

  export type KeyUserUncheckedCreateWithoutSigningConditionsInput = {
    id?: number
    keyName: string
    userPubkey: string
    createdAt?: Date | string
    updatedAt?: Date | string
    revokedAt?: Date | string | null
    suspendedAt?: Date | string | null
    suspendUntil?: Date | string | null
    lastUsedAt?: Date | string | null
    description?: string | null
    trustLevel?: string
    nostrconnectRelays?: string | null
    logs?: LogUncheckedCreateNestedManyWithoutKeyUserInput
    Token?: TokenUncheckedCreateNestedManyWithoutKeyUserInput
    requests?: RequestUncheckedCreateNestedManyWithoutKeyUserInput
  }

  export type KeyUserCreateOrConnectWithoutSigningConditionsInput = {
    where: KeyUserWhereUniqueInput
    create: XOR<KeyUserCreateWithoutSigningConditionsInput, KeyUserUncheckedCreateWithoutSigningConditionsInput>
  }

  export type KeyUserUpsertWithoutSigningConditionsInput = {
    update: XOR<KeyUserUpdateWithoutSigningConditionsInput, KeyUserUncheckedUpdateWithoutSigningConditionsInput>
    create: XOR<KeyUserCreateWithoutSigningConditionsInput, KeyUserUncheckedCreateWithoutSigningConditionsInput>
    where?: KeyUserWhereInput
  }

  export type KeyUserUpdateToOneWithWhereWithoutSigningConditionsInput = {
    where?: KeyUserWhereInput
    data: XOR<KeyUserUpdateWithoutSigningConditionsInput, KeyUserUncheckedUpdateWithoutSigningConditionsInput>
  }

  export type KeyUserUpdateWithoutSigningConditionsInput = {
    keyName?: StringFieldUpdateOperationsInput | string
    userPubkey?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    suspendedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    suspendUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastUsedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    trustLevel?: StringFieldUpdateOperationsInput | string
    nostrconnectRelays?: NullableStringFieldUpdateOperationsInput | string | null
    logs?: LogUpdateManyWithoutKeyUserNestedInput
    Token?: TokenUpdateManyWithoutKeyUserNestedInput
    requests?: RequestUpdateManyWithoutKeyUserNestedInput
  }

  export type KeyUserUncheckedUpdateWithoutSigningConditionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    keyName?: StringFieldUpdateOperationsInput | string
    userPubkey?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    suspendedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    suspendUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastUsedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    trustLevel?: StringFieldUpdateOperationsInput | string
    nostrconnectRelays?: NullableStringFieldUpdateOperationsInput | string | null
    logs?: LogUncheckedUpdateManyWithoutKeyUserNestedInput
    Token?: TokenUncheckedUpdateManyWithoutKeyUserNestedInput
    requests?: RequestUncheckedUpdateManyWithoutKeyUserNestedInput
  }

  export type KeyUserCreateWithoutLogsInput = {
    keyName: string
    userPubkey: string
    createdAt?: Date | string
    updatedAt?: Date | string
    revokedAt?: Date | string | null
    suspendedAt?: Date | string | null
    suspendUntil?: Date | string | null
    lastUsedAt?: Date | string | null
    description?: string | null
    trustLevel?: string
    nostrconnectRelays?: string | null
    signingConditions?: SigningConditionCreateNestedManyWithoutKeyUserInput
    Token?: TokenCreateNestedManyWithoutKeyUserInput
    requests?: RequestCreateNestedManyWithoutKeyUserInput
  }

  export type KeyUserUncheckedCreateWithoutLogsInput = {
    id?: number
    keyName: string
    userPubkey: string
    createdAt?: Date | string
    updatedAt?: Date | string
    revokedAt?: Date | string | null
    suspendedAt?: Date | string | null
    suspendUntil?: Date | string | null
    lastUsedAt?: Date | string | null
    description?: string | null
    trustLevel?: string
    nostrconnectRelays?: string | null
    signingConditions?: SigningConditionUncheckedCreateNestedManyWithoutKeyUserInput
    Token?: TokenUncheckedCreateNestedManyWithoutKeyUserInput
    requests?: RequestUncheckedCreateNestedManyWithoutKeyUserInput
  }

  export type KeyUserCreateOrConnectWithoutLogsInput = {
    where: KeyUserWhereUniqueInput
    create: XOR<KeyUserCreateWithoutLogsInput, KeyUserUncheckedCreateWithoutLogsInput>
  }

  export type KeyUserUpsertWithoutLogsInput = {
    update: XOR<KeyUserUpdateWithoutLogsInput, KeyUserUncheckedUpdateWithoutLogsInput>
    create: XOR<KeyUserCreateWithoutLogsInput, KeyUserUncheckedCreateWithoutLogsInput>
    where?: KeyUserWhereInput
  }

  export type KeyUserUpdateToOneWithWhereWithoutLogsInput = {
    where?: KeyUserWhereInput
    data: XOR<KeyUserUpdateWithoutLogsInput, KeyUserUncheckedUpdateWithoutLogsInput>
  }

  export type KeyUserUpdateWithoutLogsInput = {
    keyName?: StringFieldUpdateOperationsInput | string
    userPubkey?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    suspendedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    suspendUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastUsedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    trustLevel?: StringFieldUpdateOperationsInput | string
    nostrconnectRelays?: NullableStringFieldUpdateOperationsInput | string | null
    signingConditions?: SigningConditionUpdateManyWithoutKeyUserNestedInput
    Token?: TokenUpdateManyWithoutKeyUserNestedInput
    requests?: RequestUpdateManyWithoutKeyUserNestedInput
  }

  export type KeyUserUncheckedUpdateWithoutLogsInput = {
    id?: IntFieldUpdateOperationsInput | number
    keyName?: StringFieldUpdateOperationsInput | string
    userPubkey?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    suspendedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    suspendUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastUsedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    trustLevel?: StringFieldUpdateOperationsInput | string
    nostrconnectRelays?: NullableStringFieldUpdateOperationsInput | string | null
    signingConditions?: SigningConditionUncheckedUpdateManyWithoutKeyUserNestedInput
    Token?: TokenUncheckedUpdateManyWithoutKeyUserNestedInput
    requests?: RequestUncheckedUpdateManyWithoutKeyUserNestedInput
  }

  export type PolicyRuleCreateWithoutPolicyInput = {
    method: string
    kind?: string | null
    maxUsageCount?: number | null
    currentUsageCount?: number | null
  }

  export type PolicyRuleUncheckedCreateWithoutPolicyInput = {
    id?: number
    method: string
    kind?: string | null
    maxUsageCount?: number | null
    currentUsageCount?: number | null
  }

  export type PolicyRuleCreateOrConnectWithoutPolicyInput = {
    where: PolicyRuleWhereUniqueInput
    create: XOR<PolicyRuleCreateWithoutPolicyInput, PolicyRuleUncheckedCreateWithoutPolicyInput>
  }

  export type PolicyRuleCreateManyPolicyInputEnvelope = {
    data: PolicyRuleCreateManyPolicyInput | PolicyRuleCreateManyPolicyInput[]
  }

  export type TokenCreateWithoutPolicyInput = {
    keyName: string
    token: string
    clientName: string
    createdBy: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    expiresAt?: Date | string | null
    redeemedAt?: Date | string | null
    KeyUser?: KeyUserCreateNestedOneWithoutTokenInput
  }

  export type TokenUncheckedCreateWithoutPolicyInput = {
    id?: number
    keyName: string
    token: string
    clientName: string
    createdBy: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    expiresAt?: Date | string | null
    redeemedAt?: Date | string | null
    keyUserId?: number | null
  }

  export type TokenCreateOrConnectWithoutPolicyInput = {
    where: TokenWhereUniqueInput
    create: XOR<TokenCreateWithoutPolicyInput, TokenUncheckedCreateWithoutPolicyInput>
  }

  export type TokenCreateManyPolicyInputEnvelope = {
    data: TokenCreateManyPolicyInput | TokenCreateManyPolicyInput[]
  }

  export type PolicyRuleUpsertWithWhereUniqueWithoutPolicyInput = {
    where: PolicyRuleWhereUniqueInput
    update: XOR<PolicyRuleUpdateWithoutPolicyInput, PolicyRuleUncheckedUpdateWithoutPolicyInput>
    create: XOR<PolicyRuleCreateWithoutPolicyInput, PolicyRuleUncheckedCreateWithoutPolicyInput>
  }

  export type PolicyRuleUpdateWithWhereUniqueWithoutPolicyInput = {
    where: PolicyRuleWhereUniqueInput
    data: XOR<PolicyRuleUpdateWithoutPolicyInput, PolicyRuleUncheckedUpdateWithoutPolicyInput>
  }

  export type PolicyRuleUpdateManyWithWhereWithoutPolicyInput = {
    where: PolicyRuleScalarWhereInput
    data: XOR<PolicyRuleUpdateManyMutationInput, PolicyRuleUncheckedUpdateManyWithoutPolicyInput>
  }

  export type PolicyRuleScalarWhereInput = {
    AND?: PolicyRuleScalarWhereInput | PolicyRuleScalarWhereInput[]
    OR?: PolicyRuleScalarWhereInput[]
    NOT?: PolicyRuleScalarWhereInput | PolicyRuleScalarWhereInput[]
    id?: IntFilter<"PolicyRule"> | number
    method?: StringFilter<"PolicyRule"> | string
    kind?: StringNullableFilter<"PolicyRule"> | string | null
    maxUsageCount?: IntNullableFilter<"PolicyRule"> | number | null
    currentUsageCount?: IntNullableFilter<"PolicyRule"> | number | null
    policyId?: IntNullableFilter<"PolicyRule"> | number | null
  }

  export type TokenUpsertWithWhereUniqueWithoutPolicyInput = {
    where: TokenWhereUniqueInput
    update: XOR<TokenUpdateWithoutPolicyInput, TokenUncheckedUpdateWithoutPolicyInput>
    create: XOR<TokenCreateWithoutPolicyInput, TokenUncheckedCreateWithoutPolicyInput>
  }

  export type TokenUpdateWithWhereUniqueWithoutPolicyInput = {
    where: TokenWhereUniqueInput
    data: XOR<TokenUpdateWithoutPolicyInput, TokenUncheckedUpdateWithoutPolicyInput>
  }

  export type TokenUpdateManyWithWhereWithoutPolicyInput = {
    where: TokenScalarWhereInput
    data: XOR<TokenUpdateManyMutationInput, TokenUncheckedUpdateManyWithoutPolicyInput>
  }

  export type PolicyCreateWithoutRulesInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    expiresAt?: Date | string | null
    deletedAt?: Date | string | null
    description?: string | null
    Token?: TokenCreateNestedManyWithoutPolicyInput
  }

  export type PolicyUncheckedCreateWithoutRulesInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    expiresAt?: Date | string | null
    deletedAt?: Date | string | null
    description?: string | null
    Token?: TokenUncheckedCreateNestedManyWithoutPolicyInput
  }

  export type PolicyCreateOrConnectWithoutRulesInput = {
    where: PolicyWhereUniqueInput
    create: XOR<PolicyCreateWithoutRulesInput, PolicyUncheckedCreateWithoutRulesInput>
  }

  export type PolicyUpsertWithoutRulesInput = {
    update: XOR<PolicyUpdateWithoutRulesInput, PolicyUncheckedUpdateWithoutRulesInput>
    create: XOR<PolicyCreateWithoutRulesInput, PolicyUncheckedCreateWithoutRulesInput>
    where?: PolicyWhereInput
  }

  export type PolicyUpdateToOneWithWhereWithoutRulesInput = {
    where?: PolicyWhereInput
    data: XOR<PolicyUpdateWithoutRulesInput, PolicyUncheckedUpdateWithoutRulesInput>
  }

  export type PolicyUpdateWithoutRulesInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    Token?: TokenUpdateManyWithoutPolicyNestedInput
  }

  export type PolicyUncheckedUpdateWithoutRulesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    Token?: TokenUncheckedUpdateManyWithoutPolicyNestedInput
  }

  export type PolicyCreateWithoutTokenInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    expiresAt?: Date | string | null
    deletedAt?: Date | string | null
    description?: string | null
    rules?: PolicyRuleCreateNestedManyWithoutPolicyInput
  }

  export type PolicyUncheckedCreateWithoutTokenInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    expiresAt?: Date | string | null
    deletedAt?: Date | string | null
    description?: string | null
    rules?: PolicyRuleUncheckedCreateNestedManyWithoutPolicyInput
  }

  export type PolicyCreateOrConnectWithoutTokenInput = {
    where: PolicyWhereUniqueInput
    create: XOR<PolicyCreateWithoutTokenInput, PolicyUncheckedCreateWithoutTokenInput>
  }

  export type KeyUserCreateWithoutTokenInput = {
    keyName: string
    userPubkey: string
    createdAt?: Date | string
    updatedAt?: Date | string
    revokedAt?: Date | string | null
    suspendedAt?: Date | string | null
    suspendUntil?: Date | string | null
    lastUsedAt?: Date | string | null
    description?: string | null
    trustLevel?: string
    nostrconnectRelays?: string | null
    logs?: LogCreateNestedManyWithoutKeyUserInput
    signingConditions?: SigningConditionCreateNestedManyWithoutKeyUserInput
    requests?: RequestCreateNestedManyWithoutKeyUserInput
  }

  export type KeyUserUncheckedCreateWithoutTokenInput = {
    id?: number
    keyName: string
    userPubkey: string
    createdAt?: Date | string
    updatedAt?: Date | string
    revokedAt?: Date | string | null
    suspendedAt?: Date | string | null
    suspendUntil?: Date | string | null
    lastUsedAt?: Date | string | null
    description?: string | null
    trustLevel?: string
    nostrconnectRelays?: string | null
    logs?: LogUncheckedCreateNestedManyWithoutKeyUserInput
    signingConditions?: SigningConditionUncheckedCreateNestedManyWithoutKeyUserInput
    requests?: RequestUncheckedCreateNestedManyWithoutKeyUserInput
  }

  export type KeyUserCreateOrConnectWithoutTokenInput = {
    where: KeyUserWhereUniqueInput
    create: XOR<KeyUserCreateWithoutTokenInput, KeyUserUncheckedCreateWithoutTokenInput>
  }

  export type PolicyUpsertWithoutTokenInput = {
    update: XOR<PolicyUpdateWithoutTokenInput, PolicyUncheckedUpdateWithoutTokenInput>
    create: XOR<PolicyCreateWithoutTokenInput, PolicyUncheckedCreateWithoutTokenInput>
    where?: PolicyWhereInput
  }

  export type PolicyUpdateToOneWithWhereWithoutTokenInput = {
    where?: PolicyWhereInput
    data: XOR<PolicyUpdateWithoutTokenInput, PolicyUncheckedUpdateWithoutTokenInput>
  }

  export type PolicyUpdateWithoutTokenInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    rules?: PolicyRuleUpdateManyWithoutPolicyNestedInput
  }

  export type PolicyUncheckedUpdateWithoutTokenInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    rules?: PolicyRuleUncheckedUpdateManyWithoutPolicyNestedInput
  }

  export type KeyUserUpsertWithoutTokenInput = {
    update: XOR<KeyUserUpdateWithoutTokenInput, KeyUserUncheckedUpdateWithoutTokenInput>
    create: XOR<KeyUserCreateWithoutTokenInput, KeyUserUncheckedCreateWithoutTokenInput>
    where?: KeyUserWhereInput
  }

  export type KeyUserUpdateToOneWithWhereWithoutTokenInput = {
    where?: KeyUserWhereInput
    data: XOR<KeyUserUpdateWithoutTokenInput, KeyUserUncheckedUpdateWithoutTokenInput>
  }

  export type KeyUserUpdateWithoutTokenInput = {
    keyName?: StringFieldUpdateOperationsInput | string
    userPubkey?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    suspendedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    suspendUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastUsedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    trustLevel?: StringFieldUpdateOperationsInput | string
    nostrconnectRelays?: NullableStringFieldUpdateOperationsInput | string | null
    logs?: LogUpdateManyWithoutKeyUserNestedInput
    signingConditions?: SigningConditionUpdateManyWithoutKeyUserNestedInput
    requests?: RequestUpdateManyWithoutKeyUserNestedInput
  }

  export type KeyUserUncheckedUpdateWithoutTokenInput = {
    id?: IntFieldUpdateOperationsInput | number
    keyName?: StringFieldUpdateOperationsInput | string
    userPubkey?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    suspendedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    suspendUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastUsedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    trustLevel?: StringFieldUpdateOperationsInput | string
    nostrconnectRelays?: NullableStringFieldUpdateOperationsInput | string | null
    logs?: LogUncheckedUpdateManyWithoutKeyUserNestedInput
    signingConditions?: SigningConditionUncheckedUpdateManyWithoutKeyUserNestedInput
    requests?: RequestUncheckedUpdateManyWithoutKeyUserNestedInput
  }

  export type LogCreateManyKeyUserInput = {
    id?: number
    timestamp: Date | string
    type: string
    method?: string | null
    params?: string | null
    autoApproved?: boolean
    approvalType?: string | null
    keyName?: string | null
    remotePubkey?: string | null
  }

  export type SigningConditionCreateManyKeyUserInput = {
    id?: number
    method?: string | null
    kind?: string | null
    content?: string | null
    keyUserKeyName?: string | null
    allowed?: boolean | null
  }

  export type TokenCreateManyKeyUserInput = {
    id?: number
    keyName: string
    token: string
    clientName: string
    createdBy: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    expiresAt?: Date | string | null
    redeemedAt?: Date | string | null
    policyId?: number | null
  }

  export type RequestCreateManyKeyUserInput = {
    id?: string
    keyName?: string | null
    createdAt?: Date | string
    processedAt?: Date | string | null
    requestId: string
    remotePubkey: string
    method: string
    params?: string | null
    allowed?: boolean | null
    autoApproved?: boolean
    approvalType?: string | null
  }

  export type LogUpdateWithoutKeyUserInput = {
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    method?: NullableStringFieldUpdateOperationsInput | string | null
    params?: NullableStringFieldUpdateOperationsInput | string | null
    autoApproved?: BoolFieldUpdateOperationsInput | boolean
    approvalType?: NullableStringFieldUpdateOperationsInput | string | null
    keyName?: NullableStringFieldUpdateOperationsInput | string | null
    remotePubkey?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LogUncheckedUpdateWithoutKeyUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    method?: NullableStringFieldUpdateOperationsInput | string | null
    params?: NullableStringFieldUpdateOperationsInput | string | null
    autoApproved?: BoolFieldUpdateOperationsInput | boolean
    approvalType?: NullableStringFieldUpdateOperationsInput | string | null
    keyName?: NullableStringFieldUpdateOperationsInput | string | null
    remotePubkey?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LogUncheckedUpdateManyWithoutKeyUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    method?: NullableStringFieldUpdateOperationsInput | string | null
    params?: NullableStringFieldUpdateOperationsInput | string | null
    autoApproved?: BoolFieldUpdateOperationsInput | boolean
    approvalType?: NullableStringFieldUpdateOperationsInput | string | null
    keyName?: NullableStringFieldUpdateOperationsInput | string | null
    remotePubkey?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SigningConditionUpdateWithoutKeyUserInput = {
    method?: NullableStringFieldUpdateOperationsInput | string | null
    kind?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    keyUserKeyName?: NullableStringFieldUpdateOperationsInput | string | null
    allowed?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type SigningConditionUncheckedUpdateWithoutKeyUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    method?: NullableStringFieldUpdateOperationsInput | string | null
    kind?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    keyUserKeyName?: NullableStringFieldUpdateOperationsInput | string | null
    allowed?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type SigningConditionUncheckedUpdateManyWithoutKeyUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    method?: NullableStringFieldUpdateOperationsInput | string | null
    kind?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    keyUserKeyName?: NullableStringFieldUpdateOperationsInput | string | null
    allowed?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type TokenUpdateWithoutKeyUserInput = {
    keyName?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    clientName?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    redeemedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    policy?: PolicyUpdateOneWithoutTokenNestedInput
  }

  export type TokenUncheckedUpdateWithoutKeyUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    keyName?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    clientName?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    redeemedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    policyId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TokenUncheckedUpdateManyWithoutKeyUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    keyName?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    clientName?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    redeemedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    policyId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type RequestUpdateWithoutKeyUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    keyName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    requestId?: StringFieldUpdateOperationsInput | string
    remotePubkey?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    params?: NullableStringFieldUpdateOperationsInput | string | null
    allowed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    autoApproved?: BoolFieldUpdateOperationsInput | boolean
    approvalType?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RequestUncheckedUpdateWithoutKeyUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    keyName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    requestId?: StringFieldUpdateOperationsInput | string
    remotePubkey?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    params?: NullableStringFieldUpdateOperationsInput | string | null
    allowed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    autoApproved?: BoolFieldUpdateOperationsInput | boolean
    approvalType?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RequestUncheckedUpdateManyWithoutKeyUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    keyName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    requestId?: StringFieldUpdateOperationsInput | string
    remotePubkey?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    params?: NullableStringFieldUpdateOperationsInput | string | null
    allowed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    autoApproved?: BoolFieldUpdateOperationsInput | boolean
    approvalType?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PolicyRuleCreateManyPolicyInput = {
    id?: number
    method: string
    kind?: string | null
    maxUsageCount?: number | null
    currentUsageCount?: number | null
  }

  export type TokenCreateManyPolicyInput = {
    id?: number
    keyName: string
    token: string
    clientName: string
    createdBy: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    expiresAt?: Date | string | null
    redeemedAt?: Date | string | null
    keyUserId?: number | null
  }

  export type PolicyRuleUpdateWithoutPolicyInput = {
    method?: StringFieldUpdateOperationsInput | string
    kind?: NullableStringFieldUpdateOperationsInput | string | null
    maxUsageCount?: NullableIntFieldUpdateOperationsInput | number | null
    currentUsageCount?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PolicyRuleUncheckedUpdateWithoutPolicyInput = {
    id?: IntFieldUpdateOperationsInput | number
    method?: StringFieldUpdateOperationsInput | string
    kind?: NullableStringFieldUpdateOperationsInput | string | null
    maxUsageCount?: NullableIntFieldUpdateOperationsInput | number | null
    currentUsageCount?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PolicyRuleUncheckedUpdateManyWithoutPolicyInput = {
    id?: IntFieldUpdateOperationsInput | number
    method?: StringFieldUpdateOperationsInput | string
    kind?: NullableStringFieldUpdateOperationsInput | string | null
    maxUsageCount?: NullableIntFieldUpdateOperationsInput | number | null
    currentUsageCount?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TokenUpdateWithoutPolicyInput = {
    keyName?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    clientName?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    redeemedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    KeyUser?: KeyUserUpdateOneWithoutTokenNestedInput
  }

  export type TokenUncheckedUpdateWithoutPolicyInput = {
    id?: IntFieldUpdateOperationsInput | number
    keyName?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    clientName?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    redeemedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    keyUserId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TokenUncheckedUpdateManyWithoutPolicyInput = {
    id?: IntFieldUpdateOperationsInput | number
    keyName?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    clientName?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    redeemedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    keyUserId?: NullableIntFieldUpdateOperationsInput | number | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}

/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Campeonato
 * 
 */
export type Campeonato = $Result.DefaultSelection<Prisma.$CampeonatoPayload>
/**
 * Model Categoria
 * 
 */
export type Categoria = $Result.DefaultSelection<Prisma.$CategoriaPayload>
/**
 * Model Equipo
 * 
 */
export type Equipo = $Result.DefaultSelection<Prisma.$EquipoPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Campeonatoes
 * const campeonatoes = await prisma.campeonato.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Campeonatoes
   * const campeonatoes = await prisma.campeonato.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * `prisma.campeonato`: Exposes CRUD operations for the **Campeonato** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Campeonatoes
    * const campeonatoes = await prisma.campeonato.findMany()
    * ```
    */
  get campeonato(): Prisma.CampeonatoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.categoria`: Exposes CRUD operations for the **Categoria** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categorias
    * const categorias = await prisma.categoria.findMany()
    * ```
    */
  get categoria(): Prisma.CategoriaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.equipo`: Exposes CRUD operations for the **Equipo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Equipos
    * const equipos = await prisma.equipo.findMany()
    * ```
    */
  get equipo(): Prisma.EquipoDelegate<ExtArgs, ClientOptions>;
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
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    Campeonato: 'Campeonato',
    Categoria: 'Categoria',
    Equipo: 'Equipo'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "campeonato" | "categoria" | "equipo"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Campeonato: {
        payload: Prisma.$CampeonatoPayload<ExtArgs>
        fields: Prisma.CampeonatoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CampeonatoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampeonatoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CampeonatoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampeonatoPayload>
          }
          findFirst: {
            args: Prisma.CampeonatoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampeonatoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CampeonatoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampeonatoPayload>
          }
          findMany: {
            args: Prisma.CampeonatoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampeonatoPayload>[]
          }
          create: {
            args: Prisma.CampeonatoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampeonatoPayload>
          }
          createMany: {
            args: Prisma.CampeonatoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CampeonatoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampeonatoPayload>[]
          }
          delete: {
            args: Prisma.CampeonatoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampeonatoPayload>
          }
          update: {
            args: Prisma.CampeonatoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampeonatoPayload>
          }
          deleteMany: {
            args: Prisma.CampeonatoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CampeonatoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CampeonatoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampeonatoPayload>[]
          }
          upsert: {
            args: Prisma.CampeonatoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampeonatoPayload>
          }
          aggregate: {
            args: Prisma.CampeonatoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCampeonato>
          }
          groupBy: {
            args: Prisma.CampeonatoGroupByArgs<ExtArgs>
            result: $Utils.Optional<CampeonatoGroupByOutputType>[]
          }
          count: {
            args: Prisma.CampeonatoCountArgs<ExtArgs>
            result: $Utils.Optional<CampeonatoCountAggregateOutputType> | number
          }
        }
      }
      Categoria: {
        payload: Prisma.$CategoriaPayload<ExtArgs>
        fields: Prisma.CategoriaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoriaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoriaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          findFirst: {
            args: Prisma.CategoriaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoriaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          findMany: {
            args: Prisma.CategoriaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>[]
          }
          create: {
            args: Prisma.CategoriaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          createMany: {
            args: Prisma.CategoriaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoriaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>[]
          }
          delete: {
            args: Prisma.CategoriaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          update: {
            args: Prisma.CategoriaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          deleteMany: {
            args: Prisma.CategoriaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoriaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CategoriaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>[]
          }
          upsert: {
            args: Prisma.CategoriaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          aggregate: {
            args: Prisma.CategoriaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategoria>
          }
          groupBy: {
            args: Prisma.CategoriaGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoriaGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoriaCountArgs<ExtArgs>
            result: $Utils.Optional<CategoriaCountAggregateOutputType> | number
          }
        }
      }
      Equipo: {
        payload: Prisma.$EquipoPayload<ExtArgs>
        fields: Prisma.EquipoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EquipoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EquipoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipoPayload>
          }
          findFirst: {
            args: Prisma.EquipoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EquipoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipoPayload>
          }
          findMany: {
            args: Prisma.EquipoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipoPayload>[]
          }
          create: {
            args: Prisma.EquipoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipoPayload>
          }
          createMany: {
            args: Prisma.EquipoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EquipoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipoPayload>[]
          }
          delete: {
            args: Prisma.EquipoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipoPayload>
          }
          update: {
            args: Prisma.EquipoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipoPayload>
          }
          deleteMany: {
            args: Prisma.EquipoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EquipoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EquipoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipoPayload>[]
          }
          upsert: {
            args: Prisma.EquipoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipoPayload>
          }
          aggregate: {
            args: Prisma.EquipoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEquipo>
          }
          groupBy: {
            args: Prisma.EquipoGroupByArgs<ExtArgs>
            result: $Utils.Optional<EquipoGroupByOutputType>[]
          }
          count: {
            args: Prisma.EquipoCountArgs<ExtArgs>
            result: $Utils.Optional<EquipoCountAggregateOutputType> | number
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
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
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
  }
  export type GlobalOmitConfig = {
    campeonato?: CampeonatoOmit
    categoria?: CategoriaOmit
    equipo?: EquipoOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type CampeonatoCountOutputType
   */

  export type CampeonatoCountOutputType = {
    categorias: number
    equipos: number
  }

  export type CampeonatoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categorias?: boolean | CampeonatoCountOutputTypeCountCategoriasArgs
    equipos?: boolean | CampeonatoCountOutputTypeCountEquiposArgs
  }

  // Custom InputTypes
  /**
   * CampeonatoCountOutputType without action
   */
  export type CampeonatoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampeonatoCountOutputType
     */
    select?: CampeonatoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CampeonatoCountOutputType without action
   */
  export type CampeonatoCountOutputTypeCountCategoriasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoriaWhereInput
  }

  /**
   * CampeonatoCountOutputType without action
   */
  export type CampeonatoCountOutputTypeCountEquiposArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EquipoWhereInput
  }


  /**
   * Count Type CategoriaCountOutputType
   */

  export type CategoriaCountOutputType = {
    equipos: number
  }

  export type CategoriaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    equipos?: boolean | CategoriaCountOutputTypeCountEquiposArgs
  }

  // Custom InputTypes
  /**
   * CategoriaCountOutputType without action
   */
  export type CategoriaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriaCountOutputType
     */
    select?: CategoriaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoriaCountOutputType without action
   */
  export type CategoriaCountOutputTypeCountEquiposArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EquipoWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Campeonato
   */

  export type AggregateCampeonato = {
    _count: CampeonatoCountAggregateOutputType | null
    _avg: CampeonatoAvgAggregateOutputType | null
    _sum: CampeonatoSumAggregateOutputType | null
    _min: CampeonatoMinAggregateOutputType | null
    _max: CampeonatoMaxAggregateOutputType | null
  }

  export type CampeonatoAvgAggregateOutputType = {
    id: number | null
  }

  export type CampeonatoSumAggregateOutputType = {
    id: number | null
  }

  export type CampeonatoMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    creacion: Date | null
  }

  export type CampeonatoMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    creacion: Date | null
  }

  export type CampeonatoCountAggregateOutputType = {
    id: number
    nombre: number
    creacion: number
    _all: number
  }


  export type CampeonatoAvgAggregateInputType = {
    id?: true
  }

  export type CampeonatoSumAggregateInputType = {
    id?: true
  }

  export type CampeonatoMinAggregateInputType = {
    id?: true
    nombre?: true
    creacion?: true
  }

  export type CampeonatoMaxAggregateInputType = {
    id?: true
    nombre?: true
    creacion?: true
  }

  export type CampeonatoCountAggregateInputType = {
    id?: true
    nombre?: true
    creacion?: true
    _all?: true
  }

  export type CampeonatoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Campeonato to aggregate.
     */
    where?: CampeonatoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Campeonatoes to fetch.
     */
    orderBy?: CampeonatoOrderByWithRelationInput | CampeonatoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CampeonatoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Campeonatoes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Campeonatoes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Campeonatoes
    **/
    _count?: true | CampeonatoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CampeonatoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CampeonatoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CampeonatoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CampeonatoMaxAggregateInputType
  }

  export type GetCampeonatoAggregateType<T extends CampeonatoAggregateArgs> = {
        [P in keyof T & keyof AggregateCampeonato]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCampeonato[P]>
      : GetScalarType<T[P], AggregateCampeonato[P]>
  }




  export type CampeonatoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CampeonatoWhereInput
    orderBy?: CampeonatoOrderByWithAggregationInput | CampeonatoOrderByWithAggregationInput[]
    by: CampeonatoScalarFieldEnum[] | CampeonatoScalarFieldEnum
    having?: CampeonatoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CampeonatoCountAggregateInputType | true
    _avg?: CampeonatoAvgAggregateInputType
    _sum?: CampeonatoSumAggregateInputType
    _min?: CampeonatoMinAggregateInputType
    _max?: CampeonatoMaxAggregateInputType
  }

  export type CampeonatoGroupByOutputType = {
    id: number
    nombre: string
    creacion: Date
    _count: CampeonatoCountAggregateOutputType | null
    _avg: CampeonatoAvgAggregateOutputType | null
    _sum: CampeonatoSumAggregateOutputType | null
    _min: CampeonatoMinAggregateOutputType | null
    _max: CampeonatoMaxAggregateOutputType | null
  }

  type GetCampeonatoGroupByPayload<T extends CampeonatoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CampeonatoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CampeonatoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CampeonatoGroupByOutputType[P]>
            : GetScalarType<T[P], CampeonatoGroupByOutputType[P]>
        }
      >
    >


  export type CampeonatoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    creacion?: boolean
    categorias?: boolean | Campeonato$categoriasArgs<ExtArgs>
    equipos?: boolean | Campeonato$equiposArgs<ExtArgs>
    _count?: boolean | CampeonatoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["campeonato"]>

  export type CampeonatoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    creacion?: boolean
  }, ExtArgs["result"]["campeonato"]>

  export type CampeonatoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    creacion?: boolean
  }, ExtArgs["result"]["campeonato"]>

  export type CampeonatoSelectScalar = {
    id?: boolean
    nombre?: boolean
    creacion?: boolean
  }

  export type CampeonatoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "creacion", ExtArgs["result"]["campeonato"]>
  export type CampeonatoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categorias?: boolean | Campeonato$categoriasArgs<ExtArgs>
    equipos?: boolean | Campeonato$equiposArgs<ExtArgs>
    _count?: boolean | CampeonatoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CampeonatoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CampeonatoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CampeonatoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Campeonato"
    objects: {
      categorias: Prisma.$CategoriaPayload<ExtArgs>[]
      equipos: Prisma.$EquipoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      creacion: Date
    }, ExtArgs["result"]["campeonato"]>
    composites: {}
  }

  type CampeonatoGetPayload<S extends boolean | null | undefined | CampeonatoDefaultArgs> = $Result.GetResult<Prisma.$CampeonatoPayload, S>

  type CampeonatoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CampeonatoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CampeonatoCountAggregateInputType | true
    }

  export interface CampeonatoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Campeonato'], meta: { name: 'Campeonato' } }
    /**
     * Find zero or one Campeonato that matches the filter.
     * @param {CampeonatoFindUniqueArgs} args - Arguments to find a Campeonato
     * @example
     * // Get one Campeonato
     * const campeonato = await prisma.campeonato.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CampeonatoFindUniqueArgs>(args: SelectSubset<T, CampeonatoFindUniqueArgs<ExtArgs>>): Prisma__CampeonatoClient<$Result.GetResult<Prisma.$CampeonatoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Campeonato that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CampeonatoFindUniqueOrThrowArgs} args - Arguments to find a Campeonato
     * @example
     * // Get one Campeonato
     * const campeonato = await prisma.campeonato.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CampeonatoFindUniqueOrThrowArgs>(args: SelectSubset<T, CampeonatoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CampeonatoClient<$Result.GetResult<Prisma.$CampeonatoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Campeonato that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampeonatoFindFirstArgs} args - Arguments to find a Campeonato
     * @example
     * // Get one Campeonato
     * const campeonato = await prisma.campeonato.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CampeonatoFindFirstArgs>(args?: SelectSubset<T, CampeonatoFindFirstArgs<ExtArgs>>): Prisma__CampeonatoClient<$Result.GetResult<Prisma.$CampeonatoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Campeonato that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampeonatoFindFirstOrThrowArgs} args - Arguments to find a Campeonato
     * @example
     * // Get one Campeonato
     * const campeonato = await prisma.campeonato.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CampeonatoFindFirstOrThrowArgs>(args?: SelectSubset<T, CampeonatoFindFirstOrThrowArgs<ExtArgs>>): Prisma__CampeonatoClient<$Result.GetResult<Prisma.$CampeonatoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Campeonatoes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampeonatoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Campeonatoes
     * const campeonatoes = await prisma.campeonato.findMany()
     * 
     * // Get first 10 Campeonatoes
     * const campeonatoes = await prisma.campeonato.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const campeonatoWithIdOnly = await prisma.campeonato.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CampeonatoFindManyArgs>(args?: SelectSubset<T, CampeonatoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampeonatoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Campeonato.
     * @param {CampeonatoCreateArgs} args - Arguments to create a Campeonato.
     * @example
     * // Create one Campeonato
     * const Campeonato = await prisma.campeonato.create({
     *   data: {
     *     // ... data to create a Campeonato
     *   }
     * })
     * 
     */
    create<T extends CampeonatoCreateArgs>(args: SelectSubset<T, CampeonatoCreateArgs<ExtArgs>>): Prisma__CampeonatoClient<$Result.GetResult<Prisma.$CampeonatoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Campeonatoes.
     * @param {CampeonatoCreateManyArgs} args - Arguments to create many Campeonatoes.
     * @example
     * // Create many Campeonatoes
     * const campeonato = await prisma.campeonato.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CampeonatoCreateManyArgs>(args?: SelectSubset<T, CampeonatoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Campeonatoes and returns the data saved in the database.
     * @param {CampeonatoCreateManyAndReturnArgs} args - Arguments to create many Campeonatoes.
     * @example
     * // Create many Campeonatoes
     * const campeonato = await prisma.campeonato.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Campeonatoes and only return the `id`
     * const campeonatoWithIdOnly = await prisma.campeonato.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CampeonatoCreateManyAndReturnArgs>(args?: SelectSubset<T, CampeonatoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampeonatoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Campeonato.
     * @param {CampeonatoDeleteArgs} args - Arguments to delete one Campeonato.
     * @example
     * // Delete one Campeonato
     * const Campeonato = await prisma.campeonato.delete({
     *   where: {
     *     // ... filter to delete one Campeonato
     *   }
     * })
     * 
     */
    delete<T extends CampeonatoDeleteArgs>(args: SelectSubset<T, CampeonatoDeleteArgs<ExtArgs>>): Prisma__CampeonatoClient<$Result.GetResult<Prisma.$CampeonatoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Campeonato.
     * @param {CampeonatoUpdateArgs} args - Arguments to update one Campeonato.
     * @example
     * // Update one Campeonato
     * const campeonato = await prisma.campeonato.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CampeonatoUpdateArgs>(args: SelectSubset<T, CampeonatoUpdateArgs<ExtArgs>>): Prisma__CampeonatoClient<$Result.GetResult<Prisma.$CampeonatoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Campeonatoes.
     * @param {CampeonatoDeleteManyArgs} args - Arguments to filter Campeonatoes to delete.
     * @example
     * // Delete a few Campeonatoes
     * const { count } = await prisma.campeonato.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CampeonatoDeleteManyArgs>(args?: SelectSubset<T, CampeonatoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Campeonatoes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampeonatoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Campeonatoes
     * const campeonato = await prisma.campeonato.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CampeonatoUpdateManyArgs>(args: SelectSubset<T, CampeonatoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Campeonatoes and returns the data updated in the database.
     * @param {CampeonatoUpdateManyAndReturnArgs} args - Arguments to update many Campeonatoes.
     * @example
     * // Update many Campeonatoes
     * const campeonato = await prisma.campeonato.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Campeonatoes and only return the `id`
     * const campeonatoWithIdOnly = await prisma.campeonato.updateManyAndReturn({
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
    updateManyAndReturn<T extends CampeonatoUpdateManyAndReturnArgs>(args: SelectSubset<T, CampeonatoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampeonatoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Campeonato.
     * @param {CampeonatoUpsertArgs} args - Arguments to update or create a Campeonato.
     * @example
     * // Update or create a Campeonato
     * const campeonato = await prisma.campeonato.upsert({
     *   create: {
     *     // ... data to create a Campeonato
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Campeonato we want to update
     *   }
     * })
     */
    upsert<T extends CampeonatoUpsertArgs>(args: SelectSubset<T, CampeonatoUpsertArgs<ExtArgs>>): Prisma__CampeonatoClient<$Result.GetResult<Prisma.$CampeonatoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Campeonatoes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampeonatoCountArgs} args - Arguments to filter Campeonatoes to count.
     * @example
     * // Count the number of Campeonatoes
     * const count = await prisma.campeonato.count({
     *   where: {
     *     // ... the filter for the Campeonatoes we want to count
     *   }
     * })
    **/
    count<T extends CampeonatoCountArgs>(
      args?: Subset<T, CampeonatoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CampeonatoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Campeonato.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampeonatoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CampeonatoAggregateArgs>(args: Subset<T, CampeonatoAggregateArgs>): Prisma.PrismaPromise<GetCampeonatoAggregateType<T>>

    /**
     * Group by Campeonato.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampeonatoGroupByArgs} args - Group by arguments.
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
      T extends CampeonatoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CampeonatoGroupByArgs['orderBy'] }
        : { orderBy?: CampeonatoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CampeonatoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCampeonatoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Campeonato model
   */
  readonly fields: CampeonatoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Campeonato.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CampeonatoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    categorias<T extends Campeonato$categoriasArgs<ExtArgs> = {}>(args?: Subset<T, Campeonato$categoriasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    equipos<T extends Campeonato$equiposArgs<ExtArgs> = {}>(args?: Subset<T, Campeonato$equiposArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EquipoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Campeonato model
   */
  interface CampeonatoFieldRefs {
    readonly id: FieldRef<"Campeonato", 'Int'>
    readonly nombre: FieldRef<"Campeonato", 'String'>
    readonly creacion: FieldRef<"Campeonato", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Campeonato findUnique
   */
  export type CampeonatoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campeonato
     */
    select?: CampeonatoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campeonato
     */
    omit?: CampeonatoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampeonatoInclude<ExtArgs> | null
    /**
     * Filter, which Campeonato to fetch.
     */
    where: CampeonatoWhereUniqueInput
  }

  /**
   * Campeonato findUniqueOrThrow
   */
  export type CampeonatoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campeonato
     */
    select?: CampeonatoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campeonato
     */
    omit?: CampeonatoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampeonatoInclude<ExtArgs> | null
    /**
     * Filter, which Campeonato to fetch.
     */
    where: CampeonatoWhereUniqueInput
  }

  /**
   * Campeonato findFirst
   */
  export type CampeonatoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campeonato
     */
    select?: CampeonatoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campeonato
     */
    omit?: CampeonatoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampeonatoInclude<ExtArgs> | null
    /**
     * Filter, which Campeonato to fetch.
     */
    where?: CampeonatoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Campeonatoes to fetch.
     */
    orderBy?: CampeonatoOrderByWithRelationInput | CampeonatoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Campeonatoes.
     */
    cursor?: CampeonatoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Campeonatoes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Campeonatoes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Campeonatoes.
     */
    distinct?: CampeonatoScalarFieldEnum | CampeonatoScalarFieldEnum[]
  }

  /**
   * Campeonato findFirstOrThrow
   */
  export type CampeonatoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campeonato
     */
    select?: CampeonatoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campeonato
     */
    omit?: CampeonatoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampeonatoInclude<ExtArgs> | null
    /**
     * Filter, which Campeonato to fetch.
     */
    where?: CampeonatoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Campeonatoes to fetch.
     */
    orderBy?: CampeonatoOrderByWithRelationInput | CampeonatoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Campeonatoes.
     */
    cursor?: CampeonatoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Campeonatoes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Campeonatoes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Campeonatoes.
     */
    distinct?: CampeonatoScalarFieldEnum | CampeonatoScalarFieldEnum[]
  }

  /**
   * Campeonato findMany
   */
  export type CampeonatoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campeonato
     */
    select?: CampeonatoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campeonato
     */
    omit?: CampeonatoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampeonatoInclude<ExtArgs> | null
    /**
     * Filter, which Campeonatoes to fetch.
     */
    where?: CampeonatoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Campeonatoes to fetch.
     */
    orderBy?: CampeonatoOrderByWithRelationInput | CampeonatoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Campeonatoes.
     */
    cursor?: CampeonatoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Campeonatoes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Campeonatoes.
     */
    skip?: number
    distinct?: CampeonatoScalarFieldEnum | CampeonatoScalarFieldEnum[]
  }

  /**
   * Campeonato create
   */
  export type CampeonatoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campeonato
     */
    select?: CampeonatoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campeonato
     */
    omit?: CampeonatoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampeonatoInclude<ExtArgs> | null
    /**
     * The data needed to create a Campeonato.
     */
    data: XOR<CampeonatoCreateInput, CampeonatoUncheckedCreateInput>
  }

  /**
   * Campeonato createMany
   */
  export type CampeonatoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Campeonatoes.
     */
    data: CampeonatoCreateManyInput | CampeonatoCreateManyInput[]
  }

  /**
   * Campeonato createManyAndReturn
   */
  export type CampeonatoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campeonato
     */
    select?: CampeonatoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Campeonato
     */
    omit?: CampeonatoOmit<ExtArgs> | null
    /**
     * The data used to create many Campeonatoes.
     */
    data: CampeonatoCreateManyInput | CampeonatoCreateManyInput[]
  }

  /**
   * Campeonato update
   */
  export type CampeonatoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campeonato
     */
    select?: CampeonatoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campeonato
     */
    omit?: CampeonatoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampeonatoInclude<ExtArgs> | null
    /**
     * The data needed to update a Campeonato.
     */
    data: XOR<CampeonatoUpdateInput, CampeonatoUncheckedUpdateInput>
    /**
     * Choose, which Campeonato to update.
     */
    where: CampeonatoWhereUniqueInput
  }

  /**
   * Campeonato updateMany
   */
  export type CampeonatoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Campeonatoes.
     */
    data: XOR<CampeonatoUpdateManyMutationInput, CampeonatoUncheckedUpdateManyInput>
    /**
     * Filter which Campeonatoes to update
     */
    where?: CampeonatoWhereInput
    /**
     * Limit how many Campeonatoes to update.
     */
    limit?: number
  }

  /**
   * Campeonato updateManyAndReturn
   */
  export type CampeonatoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campeonato
     */
    select?: CampeonatoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Campeonato
     */
    omit?: CampeonatoOmit<ExtArgs> | null
    /**
     * The data used to update Campeonatoes.
     */
    data: XOR<CampeonatoUpdateManyMutationInput, CampeonatoUncheckedUpdateManyInput>
    /**
     * Filter which Campeonatoes to update
     */
    where?: CampeonatoWhereInput
    /**
     * Limit how many Campeonatoes to update.
     */
    limit?: number
  }

  /**
   * Campeonato upsert
   */
  export type CampeonatoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campeonato
     */
    select?: CampeonatoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campeonato
     */
    omit?: CampeonatoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampeonatoInclude<ExtArgs> | null
    /**
     * The filter to search for the Campeonato to update in case it exists.
     */
    where: CampeonatoWhereUniqueInput
    /**
     * In case the Campeonato found by the `where` argument doesn't exist, create a new Campeonato with this data.
     */
    create: XOR<CampeonatoCreateInput, CampeonatoUncheckedCreateInput>
    /**
     * In case the Campeonato was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CampeonatoUpdateInput, CampeonatoUncheckedUpdateInput>
  }

  /**
   * Campeonato delete
   */
  export type CampeonatoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campeonato
     */
    select?: CampeonatoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campeonato
     */
    omit?: CampeonatoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampeonatoInclude<ExtArgs> | null
    /**
     * Filter which Campeonato to delete.
     */
    where: CampeonatoWhereUniqueInput
  }

  /**
   * Campeonato deleteMany
   */
  export type CampeonatoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Campeonatoes to delete
     */
    where?: CampeonatoWhereInput
    /**
     * Limit how many Campeonatoes to delete.
     */
    limit?: number
  }

  /**
   * Campeonato.categorias
   */
  export type Campeonato$categoriasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    where?: CategoriaWhereInput
    orderBy?: CategoriaOrderByWithRelationInput | CategoriaOrderByWithRelationInput[]
    cursor?: CategoriaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CategoriaScalarFieldEnum | CategoriaScalarFieldEnum[]
  }

  /**
   * Campeonato.equipos
   */
  export type Campeonato$equiposArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipo
     */
    select?: EquipoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipo
     */
    omit?: EquipoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipoInclude<ExtArgs> | null
    where?: EquipoWhereInput
    orderBy?: EquipoOrderByWithRelationInput | EquipoOrderByWithRelationInput[]
    cursor?: EquipoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EquipoScalarFieldEnum | EquipoScalarFieldEnum[]
  }

  /**
   * Campeonato without action
   */
  export type CampeonatoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campeonato
     */
    select?: CampeonatoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campeonato
     */
    omit?: CampeonatoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampeonatoInclude<ExtArgs> | null
  }


  /**
   * Model Categoria
   */

  export type AggregateCategoria = {
    _count: CategoriaCountAggregateOutputType | null
    _avg: CategoriaAvgAggregateOutputType | null
    _sum: CategoriaSumAggregateOutputType | null
    _min: CategoriaMinAggregateOutputType | null
    _max: CategoriaMaxAggregateOutputType | null
  }

  export type CategoriaAvgAggregateOutputType = {
    id: number | null
    idCampeonato: number | null
    nEquipos: number | null
  }

  export type CategoriaSumAggregateOutputType = {
    id: number | null
    idCampeonato: number | null
    nEquipos: number | null
  }

  export type CategoriaMinAggregateOutputType = {
    id: number | null
    idCampeonato: number | null
    nombre: string | null
    nEquipos: number | null
    creacion: Date | null
  }

  export type CategoriaMaxAggregateOutputType = {
    id: number | null
    idCampeonato: number | null
    nombre: string | null
    nEquipos: number | null
    creacion: Date | null
  }

  export type CategoriaCountAggregateOutputType = {
    id: number
    idCampeonato: number
    nombre: number
    nEquipos: number
    creacion: number
    _all: number
  }


  export type CategoriaAvgAggregateInputType = {
    id?: true
    idCampeonato?: true
    nEquipos?: true
  }

  export type CategoriaSumAggregateInputType = {
    id?: true
    idCampeonato?: true
    nEquipos?: true
  }

  export type CategoriaMinAggregateInputType = {
    id?: true
    idCampeonato?: true
    nombre?: true
    nEquipos?: true
    creacion?: true
  }

  export type CategoriaMaxAggregateInputType = {
    id?: true
    idCampeonato?: true
    nombre?: true
    nEquipos?: true
    creacion?: true
  }

  export type CategoriaCountAggregateInputType = {
    id?: true
    idCampeonato?: true
    nombre?: true
    nEquipos?: true
    creacion?: true
    _all?: true
  }

  export type CategoriaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categoria to aggregate.
     */
    where?: CategoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categorias to fetch.
     */
    orderBy?: CategoriaOrderByWithRelationInput | CategoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categorias
    **/
    _count?: true | CategoriaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoriaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategoriaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoriaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoriaMaxAggregateInputType
  }

  export type GetCategoriaAggregateType<T extends CategoriaAggregateArgs> = {
        [P in keyof T & keyof AggregateCategoria]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategoria[P]>
      : GetScalarType<T[P], AggregateCategoria[P]>
  }




  export type CategoriaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoriaWhereInput
    orderBy?: CategoriaOrderByWithAggregationInput | CategoriaOrderByWithAggregationInput[]
    by: CategoriaScalarFieldEnum[] | CategoriaScalarFieldEnum
    having?: CategoriaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoriaCountAggregateInputType | true
    _avg?: CategoriaAvgAggregateInputType
    _sum?: CategoriaSumAggregateInputType
    _min?: CategoriaMinAggregateInputType
    _max?: CategoriaMaxAggregateInputType
  }

  export type CategoriaGroupByOutputType = {
    id: number
    idCampeonato: number
    nombre: string
    nEquipos: number
    creacion: Date
    _count: CategoriaCountAggregateOutputType | null
    _avg: CategoriaAvgAggregateOutputType | null
    _sum: CategoriaSumAggregateOutputType | null
    _min: CategoriaMinAggregateOutputType | null
    _max: CategoriaMaxAggregateOutputType | null
  }

  type GetCategoriaGroupByPayload<T extends CategoriaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoriaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoriaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoriaGroupByOutputType[P]>
            : GetScalarType<T[P], CategoriaGroupByOutputType[P]>
        }
      >
    >


  export type CategoriaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    idCampeonato?: boolean
    nombre?: boolean
    nEquipos?: boolean
    creacion?: boolean
    campeonato?: boolean | CampeonatoDefaultArgs<ExtArgs>
    equipos?: boolean | Categoria$equiposArgs<ExtArgs>
    _count?: boolean | CategoriaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categoria"]>

  export type CategoriaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    idCampeonato?: boolean
    nombre?: boolean
    nEquipos?: boolean
    creacion?: boolean
    campeonato?: boolean | CampeonatoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categoria"]>

  export type CategoriaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    idCampeonato?: boolean
    nombre?: boolean
    nEquipos?: boolean
    creacion?: boolean
    campeonato?: boolean | CampeonatoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categoria"]>

  export type CategoriaSelectScalar = {
    id?: boolean
    idCampeonato?: boolean
    nombre?: boolean
    nEquipos?: boolean
    creacion?: boolean
  }

  export type CategoriaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "idCampeonato" | "nombre" | "nEquipos" | "creacion", ExtArgs["result"]["categoria"]>
  export type CategoriaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    campeonato?: boolean | CampeonatoDefaultArgs<ExtArgs>
    equipos?: boolean | Categoria$equiposArgs<ExtArgs>
    _count?: boolean | CategoriaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategoriaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    campeonato?: boolean | CampeonatoDefaultArgs<ExtArgs>
  }
  export type CategoriaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    campeonato?: boolean | CampeonatoDefaultArgs<ExtArgs>
  }

  export type $CategoriaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Categoria"
    objects: {
      campeonato: Prisma.$CampeonatoPayload<ExtArgs>
      equipos: Prisma.$EquipoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      idCampeonato: number
      nombre: string
      nEquipos: number
      creacion: Date
    }, ExtArgs["result"]["categoria"]>
    composites: {}
  }

  type CategoriaGetPayload<S extends boolean | null | undefined | CategoriaDefaultArgs> = $Result.GetResult<Prisma.$CategoriaPayload, S>

  type CategoriaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoriaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoriaCountAggregateInputType | true
    }

  export interface CategoriaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Categoria'], meta: { name: 'Categoria' } }
    /**
     * Find zero or one Categoria that matches the filter.
     * @param {CategoriaFindUniqueArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoriaFindUniqueArgs>(args: SelectSubset<T, CategoriaFindUniqueArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Categoria that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoriaFindUniqueOrThrowArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoriaFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoriaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categoria that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaFindFirstArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoriaFindFirstArgs>(args?: SelectSubset<T, CategoriaFindFirstArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categoria that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaFindFirstOrThrowArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoriaFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoriaFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categorias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categorias
     * const categorias = await prisma.categoria.findMany()
     * 
     * // Get first 10 Categorias
     * const categorias = await prisma.categoria.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoriaWithIdOnly = await prisma.categoria.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoriaFindManyArgs>(args?: SelectSubset<T, CategoriaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Categoria.
     * @param {CategoriaCreateArgs} args - Arguments to create a Categoria.
     * @example
     * // Create one Categoria
     * const Categoria = await prisma.categoria.create({
     *   data: {
     *     // ... data to create a Categoria
     *   }
     * })
     * 
     */
    create<T extends CategoriaCreateArgs>(args: SelectSubset<T, CategoriaCreateArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categorias.
     * @param {CategoriaCreateManyArgs} args - Arguments to create many Categorias.
     * @example
     * // Create many Categorias
     * const categoria = await prisma.categoria.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoriaCreateManyArgs>(args?: SelectSubset<T, CategoriaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categorias and returns the data saved in the database.
     * @param {CategoriaCreateManyAndReturnArgs} args - Arguments to create many Categorias.
     * @example
     * // Create many Categorias
     * const categoria = await prisma.categoria.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categorias and only return the `id`
     * const categoriaWithIdOnly = await prisma.categoria.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoriaCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoriaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Categoria.
     * @param {CategoriaDeleteArgs} args - Arguments to delete one Categoria.
     * @example
     * // Delete one Categoria
     * const Categoria = await prisma.categoria.delete({
     *   where: {
     *     // ... filter to delete one Categoria
     *   }
     * })
     * 
     */
    delete<T extends CategoriaDeleteArgs>(args: SelectSubset<T, CategoriaDeleteArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Categoria.
     * @param {CategoriaUpdateArgs} args - Arguments to update one Categoria.
     * @example
     * // Update one Categoria
     * const categoria = await prisma.categoria.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoriaUpdateArgs>(args: SelectSubset<T, CategoriaUpdateArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categorias.
     * @param {CategoriaDeleteManyArgs} args - Arguments to filter Categorias to delete.
     * @example
     * // Delete a few Categorias
     * const { count } = await prisma.categoria.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoriaDeleteManyArgs>(args?: SelectSubset<T, CategoriaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categorias
     * const categoria = await prisma.categoria.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoriaUpdateManyArgs>(args: SelectSubset<T, CategoriaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categorias and returns the data updated in the database.
     * @param {CategoriaUpdateManyAndReturnArgs} args - Arguments to update many Categorias.
     * @example
     * // Update many Categorias
     * const categoria = await prisma.categoria.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categorias and only return the `id`
     * const categoriaWithIdOnly = await prisma.categoria.updateManyAndReturn({
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
    updateManyAndReturn<T extends CategoriaUpdateManyAndReturnArgs>(args: SelectSubset<T, CategoriaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Categoria.
     * @param {CategoriaUpsertArgs} args - Arguments to update or create a Categoria.
     * @example
     * // Update or create a Categoria
     * const categoria = await prisma.categoria.upsert({
     *   create: {
     *     // ... data to create a Categoria
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Categoria we want to update
     *   }
     * })
     */
    upsert<T extends CategoriaUpsertArgs>(args: SelectSubset<T, CategoriaUpsertArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaCountArgs} args - Arguments to filter Categorias to count.
     * @example
     * // Count the number of Categorias
     * const count = await prisma.categoria.count({
     *   where: {
     *     // ... the filter for the Categorias we want to count
     *   }
     * })
    **/
    count<T extends CategoriaCountArgs>(
      args?: Subset<T, CategoriaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoriaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Categoria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoriaAggregateArgs>(args: Subset<T, CategoriaAggregateArgs>): Prisma.PrismaPromise<GetCategoriaAggregateType<T>>

    /**
     * Group by Categoria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaGroupByArgs} args - Group by arguments.
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
      T extends CategoriaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoriaGroupByArgs['orderBy'] }
        : { orderBy?: CategoriaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CategoriaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoriaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Categoria model
   */
  readonly fields: CategoriaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Categoria.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoriaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    campeonato<T extends CampeonatoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CampeonatoDefaultArgs<ExtArgs>>): Prisma__CampeonatoClient<$Result.GetResult<Prisma.$CampeonatoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    equipos<T extends Categoria$equiposArgs<ExtArgs> = {}>(args?: Subset<T, Categoria$equiposArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EquipoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Categoria model
   */
  interface CategoriaFieldRefs {
    readonly id: FieldRef<"Categoria", 'Int'>
    readonly idCampeonato: FieldRef<"Categoria", 'Int'>
    readonly nombre: FieldRef<"Categoria", 'String'>
    readonly nEquipos: FieldRef<"Categoria", 'Int'>
    readonly creacion: FieldRef<"Categoria", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Categoria findUnique
   */
  export type CategoriaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Categoria to fetch.
     */
    where: CategoriaWhereUniqueInput
  }

  /**
   * Categoria findUniqueOrThrow
   */
  export type CategoriaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Categoria to fetch.
     */
    where: CategoriaWhereUniqueInput
  }

  /**
   * Categoria findFirst
   */
  export type CategoriaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Categoria to fetch.
     */
    where?: CategoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categorias to fetch.
     */
    orderBy?: CategoriaOrderByWithRelationInput | CategoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categorias.
     */
    cursor?: CategoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categorias.
     */
    distinct?: CategoriaScalarFieldEnum | CategoriaScalarFieldEnum[]
  }

  /**
   * Categoria findFirstOrThrow
   */
  export type CategoriaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Categoria to fetch.
     */
    where?: CategoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categorias to fetch.
     */
    orderBy?: CategoriaOrderByWithRelationInput | CategoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categorias.
     */
    cursor?: CategoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categorias.
     */
    distinct?: CategoriaScalarFieldEnum | CategoriaScalarFieldEnum[]
  }

  /**
   * Categoria findMany
   */
  export type CategoriaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Categorias to fetch.
     */
    where?: CategoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categorias to fetch.
     */
    orderBy?: CategoriaOrderByWithRelationInput | CategoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categorias.
     */
    cursor?: CategoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categorias.
     */
    skip?: number
    distinct?: CategoriaScalarFieldEnum | CategoriaScalarFieldEnum[]
  }

  /**
   * Categoria create
   */
  export type CategoriaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * The data needed to create a Categoria.
     */
    data: XOR<CategoriaCreateInput, CategoriaUncheckedCreateInput>
  }

  /**
   * Categoria createMany
   */
  export type CategoriaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categorias.
     */
    data: CategoriaCreateManyInput | CategoriaCreateManyInput[]
  }

  /**
   * Categoria createManyAndReturn
   */
  export type CategoriaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * The data used to create many Categorias.
     */
    data: CategoriaCreateManyInput | CategoriaCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Categoria update
   */
  export type CategoriaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * The data needed to update a Categoria.
     */
    data: XOR<CategoriaUpdateInput, CategoriaUncheckedUpdateInput>
    /**
     * Choose, which Categoria to update.
     */
    where: CategoriaWhereUniqueInput
  }

  /**
   * Categoria updateMany
   */
  export type CategoriaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categorias.
     */
    data: XOR<CategoriaUpdateManyMutationInput, CategoriaUncheckedUpdateManyInput>
    /**
     * Filter which Categorias to update
     */
    where?: CategoriaWhereInput
    /**
     * Limit how many Categorias to update.
     */
    limit?: number
  }

  /**
   * Categoria updateManyAndReturn
   */
  export type CategoriaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * The data used to update Categorias.
     */
    data: XOR<CategoriaUpdateManyMutationInput, CategoriaUncheckedUpdateManyInput>
    /**
     * Filter which Categorias to update
     */
    where?: CategoriaWhereInput
    /**
     * Limit how many Categorias to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Categoria upsert
   */
  export type CategoriaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * The filter to search for the Categoria to update in case it exists.
     */
    where: CategoriaWhereUniqueInput
    /**
     * In case the Categoria found by the `where` argument doesn't exist, create a new Categoria with this data.
     */
    create: XOR<CategoriaCreateInput, CategoriaUncheckedCreateInput>
    /**
     * In case the Categoria was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoriaUpdateInput, CategoriaUncheckedUpdateInput>
  }

  /**
   * Categoria delete
   */
  export type CategoriaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter which Categoria to delete.
     */
    where: CategoriaWhereUniqueInput
  }

  /**
   * Categoria deleteMany
   */
  export type CategoriaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categorias to delete
     */
    where?: CategoriaWhereInput
    /**
     * Limit how many Categorias to delete.
     */
    limit?: number
  }

  /**
   * Categoria.equipos
   */
  export type Categoria$equiposArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipo
     */
    select?: EquipoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipo
     */
    omit?: EquipoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipoInclude<ExtArgs> | null
    where?: EquipoWhereInput
    orderBy?: EquipoOrderByWithRelationInput | EquipoOrderByWithRelationInput[]
    cursor?: EquipoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EquipoScalarFieldEnum | EquipoScalarFieldEnum[]
  }

  /**
   * Categoria without action
   */
  export type CategoriaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
  }


  /**
   * Model Equipo
   */

  export type AggregateEquipo = {
    _count: EquipoCountAggregateOutputType | null
    _avg: EquipoAvgAggregateOutputType | null
    _sum: EquipoSumAggregateOutputType | null
    _min: EquipoMinAggregateOutputType | null
    _max: EquipoMaxAggregateOutputType | null
  }

  export type EquipoAvgAggregateOutputType = {
    id: number | null
    idCategoria: number | null
    idCampeonato: number | null
  }

  export type EquipoSumAggregateOutputType = {
    id: number | null
    idCategoria: number | null
    idCampeonato: number | null
  }

  export type EquipoMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    abreviatura: string | null
    idCategoria: number | null
    idCampeonato: number | null
    email: string | null
    telefono: string | null
    url_logo: string | null
  }

  export type EquipoMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    abreviatura: string | null
    idCategoria: number | null
    idCampeonato: number | null
    email: string | null
    telefono: string | null
    url_logo: string | null
  }

  export type EquipoCountAggregateOutputType = {
    id: number
    nombre: number
    abreviatura: number
    idCategoria: number
    idCampeonato: number
    email: number
    telefono: number
    url_logo: number
    _all: number
  }


  export type EquipoAvgAggregateInputType = {
    id?: true
    idCategoria?: true
    idCampeonato?: true
  }

  export type EquipoSumAggregateInputType = {
    id?: true
    idCategoria?: true
    idCampeonato?: true
  }

  export type EquipoMinAggregateInputType = {
    id?: true
    nombre?: true
    abreviatura?: true
    idCategoria?: true
    idCampeonato?: true
    email?: true
    telefono?: true
    url_logo?: true
  }

  export type EquipoMaxAggregateInputType = {
    id?: true
    nombre?: true
    abreviatura?: true
    idCategoria?: true
    idCampeonato?: true
    email?: true
    telefono?: true
    url_logo?: true
  }

  export type EquipoCountAggregateInputType = {
    id?: true
    nombre?: true
    abreviatura?: true
    idCategoria?: true
    idCampeonato?: true
    email?: true
    telefono?: true
    url_logo?: true
    _all?: true
  }

  export type EquipoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Equipo to aggregate.
     */
    where?: EquipoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Equipos to fetch.
     */
    orderBy?: EquipoOrderByWithRelationInput | EquipoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EquipoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Equipos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Equipos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Equipos
    **/
    _count?: true | EquipoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EquipoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EquipoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EquipoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EquipoMaxAggregateInputType
  }

  export type GetEquipoAggregateType<T extends EquipoAggregateArgs> = {
        [P in keyof T & keyof AggregateEquipo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEquipo[P]>
      : GetScalarType<T[P], AggregateEquipo[P]>
  }




  export type EquipoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EquipoWhereInput
    orderBy?: EquipoOrderByWithAggregationInput | EquipoOrderByWithAggregationInput[]
    by: EquipoScalarFieldEnum[] | EquipoScalarFieldEnum
    having?: EquipoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EquipoCountAggregateInputType | true
    _avg?: EquipoAvgAggregateInputType
    _sum?: EquipoSumAggregateInputType
    _min?: EquipoMinAggregateInputType
    _max?: EquipoMaxAggregateInputType
  }

  export type EquipoGroupByOutputType = {
    id: number
    nombre: string
    abreviatura: string
    idCategoria: number
    idCampeonato: number
    email: string
    telefono: string
    url_logo: string
    _count: EquipoCountAggregateOutputType | null
    _avg: EquipoAvgAggregateOutputType | null
    _sum: EquipoSumAggregateOutputType | null
    _min: EquipoMinAggregateOutputType | null
    _max: EquipoMaxAggregateOutputType | null
  }

  type GetEquipoGroupByPayload<T extends EquipoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EquipoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EquipoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EquipoGroupByOutputType[P]>
            : GetScalarType<T[P], EquipoGroupByOutputType[P]>
        }
      >
    >


  export type EquipoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    abreviatura?: boolean
    idCategoria?: boolean
    idCampeonato?: boolean
    email?: boolean
    telefono?: boolean
    url_logo?: boolean
    categoria?: boolean | CategoriaDefaultArgs<ExtArgs>
    campeonato?: boolean | CampeonatoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["equipo"]>

  export type EquipoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    abreviatura?: boolean
    idCategoria?: boolean
    idCampeonato?: boolean
    email?: boolean
    telefono?: boolean
    url_logo?: boolean
    categoria?: boolean | CategoriaDefaultArgs<ExtArgs>
    campeonato?: boolean | CampeonatoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["equipo"]>

  export type EquipoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    abreviatura?: boolean
    idCategoria?: boolean
    idCampeonato?: boolean
    email?: boolean
    telefono?: boolean
    url_logo?: boolean
    categoria?: boolean | CategoriaDefaultArgs<ExtArgs>
    campeonato?: boolean | CampeonatoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["equipo"]>

  export type EquipoSelectScalar = {
    id?: boolean
    nombre?: boolean
    abreviatura?: boolean
    idCategoria?: boolean
    idCampeonato?: boolean
    email?: boolean
    telefono?: boolean
    url_logo?: boolean
  }

  export type EquipoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "abreviatura" | "idCategoria" | "idCampeonato" | "email" | "telefono" | "url_logo", ExtArgs["result"]["equipo"]>
  export type EquipoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categoria?: boolean | CategoriaDefaultArgs<ExtArgs>
    campeonato?: boolean | CampeonatoDefaultArgs<ExtArgs>
  }
  export type EquipoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categoria?: boolean | CategoriaDefaultArgs<ExtArgs>
    campeonato?: boolean | CampeonatoDefaultArgs<ExtArgs>
  }
  export type EquipoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categoria?: boolean | CategoriaDefaultArgs<ExtArgs>
    campeonato?: boolean | CampeonatoDefaultArgs<ExtArgs>
  }

  export type $EquipoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Equipo"
    objects: {
      categoria: Prisma.$CategoriaPayload<ExtArgs>
      campeonato: Prisma.$CampeonatoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      abreviatura: string
      idCategoria: number
      idCampeonato: number
      email: string
      telefono: string
      url_logo: string
    }, ExtArgs["result"]["equipo"]>
    composites: {}
  }

  type EquipoGetPayload<S extends boolean | null | undefined | EquipoDefaultArgs> = $Result.GetResult<Prisma.$EquipoPayload, S>

  type EquipoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EquipoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EquipoCountAggregateInputType | true
    }

  export interface EquipoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Equipo'], meta: { name: 'Equipo' } }
    /**
     * Find zero or one Equipo that matches the filter.
     * @param {EquipoFindUniqueArgs} args - Arguments to find a Equipo
     * @example
     * // Get one Equipo
     * const equipo = await prisma.equipo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EquipoFindUniqueArgs>(args: SelectSubset<T, EquipoFindUniqueArgs<ExtArgs>>): Prisma__EquipoClient<$Result.GetResult<Prisma.$EquipoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Equipo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EquipoFindUniqueOrThrowArgs} args - Arguments to find a Equipo
     * @example
     * // Get one Equipo
     * const equipo = await prisma.equipo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EquipoFindUniqueOrThrowArgs>(args: SelectSubset<T, EquipoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EquipoClient<$Result.GetResult<Prisma.$EquipoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Equipo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipoFindFirstArgs} args - Arguments to find a Equipo
     * @example
     * // Get one Equipo
     * const equipo = await prisma.equipo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EquipoFindFirstArgs>(args?: SelectSubset<T, EquipoFindFirstArgs<ExtArgs>>): Prisma__EquipoClient<$Result.GetResult<Prisma.$EquipoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Equipo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipoFindFirstOrThrowArgs} args - Arguments to find a Equipo
     * @example
     * // Get one Equipo
     * const equipo = await prisma.equipo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EquipoFindFirstOrThrowArgs>(args?: SelectSubset<T, EquipoFindFirstOrThrowArgs<ExtArgs>>): Prisma__EquipoClient<$Result.GetResult<Prisma.$EquipoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Equipos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Equipos
     * const equipos = await prisma.equipo.findMany()
     * 
     * // Get first 10 Equipos
     * const equipos = await prisma.equipo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const equipoWithIdOnly = await prisma.equipo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EquipoFindManyArgs>(args?: SelectSubset<T, EquipoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EquipoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Equipo.
     * @param {EquipoCreateArgs} args - Arguments to create a Equipo.
     * @example
     * // Create one Equipo
     * const Equipo = await prisma.equipo.create({
     *   data: {
     *     // ... data to create a Equipo
     *   }
     * })
     * 
     */
    create<T extends EquipoCreateArgs>(args: SelectSubset<T, EquipoCreateArgs<ExtArgs>>): Prisma__EquipoClient<$Result.GetResult<Prisma.$EquipoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Equipos.
     * @param {EquipoCreateManyArgs} args - Arguments to create many Equipos.
     * @example
     * // Create many Equipos
     * const equipo = await prisma.equipo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EquipoCreateManyArgs>(args?: SelectSubset<T, EquipoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Equipos and returns the data saved in the database.
     * @param {EquipoCreateManyAndReturnArgs} args - Arguments to create many Equipos.
     * @example
     * // Create many Equipos
     * const equipo = await prisma.equipo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Equipos and only return the `id`
     * const equipoWithIdOnly = await prisma.equipo.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EquipoCreateManyAndReturnArgs>(args?: SelectSubset<T, EquipoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EquipoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Equipo.
     * @param {EquipoDeleteArgs} args - Arguments to delete one Equipo.
     * @example
     * // Delete one Equipo
     * const Equipo = await prisma.equipo.delete({
     *   where: {
     *     // ... filter to delete one Equipo
     *   }
     * })
     * 
     */
    delete<T extends EquipoDeleteArgs>(args: SelectSubset<T, EquipoDeleteArgs<ExtArgs>>): Prisma__EquipoClient<$Result.GetResult<Prisma.$EquipoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Equipo.
     * @param {EquipoUpdateArgs} args - Arguments to update one Equipo.
     * @example
     * // Update one Equipo
     * const equipo = await prisma.equipo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EquipoUpdateArgs>(args: SelectSubset<T, EquipoUpdateArgs<ExtArgs>>): Prisma__EquipoClient<$Result.GetResult<Prisma.$EquipoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Equipos.
     * @param {EquipoDeleteManyArgs} args - Arguments to filter Equipos to delete.
     * @example
     * // Delete a few Equipos
     * const { count } = await prisma.equipo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EquipoDeleteManyArgs>(args?: SelectSubset<T, EquipoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Equipos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Equipos
     * const equipo = await prisma.equipo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EquipoUpdateManyArgs>(args: SelectSubset<T, EquipoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Equipos and returns the data updated in the database.
     * @param {EquipoUpdateManyAndReturnArgs} args - Arguments to update many Equipos.
     * @example
     * // Update many Equipos
     * const equipo = await prisma.equipo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Equipos and only return the `id`
     * const equipoWithIdOnly = await prisma.equipo.updateManyAndReturn({
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
    updateManyAndReturn<T extends EquipoUpdateManyAndReturnArgs>(args: SelectSubset<T, EquipoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EquipoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Equipo.
     * @param {EquipoUpsertArgs} args - Arguments to update or create a Equipo.
     * @example
     * // Update or create a Equipo
     * const equipo = await prisma.equipo.upsert({
     *   create: {
     *     // ... data to create a Equipo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Equipo we want to update
     *   }
     * })
     */
    upsert<T extends EquipoUpsertArgs>(args: SelectSubset<T, EquipoUpsertArgs<ExtArgs>>): Prisma__EquipoClient<$Result.GetResult<Prisma.$EquipoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Equipos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipoCountArgs} args - Arguments to filter Equipos to count.
     * @example
     * // Count the number of Equipos
     * const count = await prisma.equipo.count({
     *   where: {
     *     // ... the filter for the Equipos we want to count
     *   }
     * })
    **/
    count<T extends EquipoCountArgs>(
      args?: Subset<T, EquipoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EquipoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Equipo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EquipoAggregateArgs>(args: Subset<T, EquipoAggregateArgs>): Prisma.PrismaPromise<GetEquipoAggregateType<T>>

    /**
     * Group by Equipo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipoGroupByArgs} args - Group by arguments.
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
      T extends EquipoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EquipoGroupByArgs['orderBy'] }
        : { orderBy?: EquipoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EquipoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEquipoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Equipo model
   */
  readonly fields: EquipoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Equipo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EquipoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    categoria<T extends CategoriaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoriaDefaultArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    campeonato<T extends CampeonatoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CampeonatoDefaultArgs<ExtArgs>>): Prisma__CampeonatoClient<$Result.GetResult<Prisma.$CampeonatoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Equipo model
   */
  interface EquipoFieldRefs {
    readonly id: FieldRef<"Equipo", 'Int'>
    readonly nombre: FieldRef<"Equipo", 'String'>
    readonly abreviatura: FieldRef<"Equipo", 'String'>
    readonly idCategoria: FieldRef<"Equipo", 'Int'>
    readonly idCampeonato: FieldRef<"Equipo", 'Int'>
    readonly email: FieldRef<"Equipo", 'String'>
    readonly telefono: FieldRef<"Equipo", 'String'>
    readonly url_logo: FieldRef<"Equipo", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Equipo findUnique
   */
  export type EquipoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipo
     */
    select?: EquipoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipo
     */
    omit?: EquipoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipoInclude<ExtArgs> | null
    /**
     * Filter, which Equipo to fetch.
     */
    where: EquipoWhereUniqueInput
  }

  /**
   * Equipo findUniqueOrThrow
   */
  export type EquipoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipo
     */
    select?: EquipoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipo
     */
    omit?: EquipoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipoInclude<ExtArgs> | null
    /**
     * Filter, which Equipo to fetch.
     */
    where: EquipoWhereUniqueInput
  }

  /**
   * Equipo findFirst
   */
  export type EquipoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipo
     */
    select?: EquipoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipo
     */
    omit?: EquipoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipoInclude<ExtArgs> | null
    /**
     * Filter, which Equipo to fetch.
     */
    where?: EquipoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Equipos to fetch.
     */
    orderBy?: EquipoOrderByWithRelationInput | EquipoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Equipos.
     */
    cursor?: EquipoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Equipos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Equipos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Equipos.
     */
    distinct?: EquipoScalarFieldEnum | EquipoScalarFieldEnum[]
  }

  /**
   * Equipo findFirstOrThrow
   */
  export type EquipoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipo
     */
    select?: EquipoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipo
     */
    omit?: EquipoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipoInclude<ExtArgs> | null
    /**
     * Filter, which Equipo to fetch.
     */
    where?: EquipoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Equipos to fetch.
     */
    orderBy?: EquipoOrderByWithRelationInput | EquipoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Equipos.
     */
    cursor?: EquipoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Equipos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Equipos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Equipos.
     */
    distinct?: EquipoScalarFieldEnum | EquipoScalarFieldEnum[]
  }

  /**
   * Equipo findMany
   */
  export type EquipoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipo
     */
    select?: EquipoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipo
     */
    omit?: EquipoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipoInclude<ExtArgs> | null
    /**
     * Filter, which Equipos to fetch.
     */
    where?: EquipoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Equipos to fetch.
     */
    orderBy?: EquipoOrderByWithRelationInput | EquipoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Equipos.
     */
    cursor?: EquipoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Equipos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Equipos.
     */
    skip?: number
    distinct?: EquipoScalarFieldEnum | EquipoScalarFieldEnum[]
  }

  /**
   * Equipo create
   */
  export type EquipoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipo
     */
    select?: EquipoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipo
     */
    omit?: EquipoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipoInclude<ExtArgs> | null
    /**
     * The data needed to create a Equipo.
     */
    data: XOR<EquipoCreateInput, EquipoUncheckedCreateInput>
  }

  /**
   * Equipo createMany
   */
  export type EquipoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Equipos.
     */
    data: EquipoCreateManyInput | EquipoCreateManyInput[]
  }

  /**
   * Equipo createManyAndReturn
   */
  export type EquipoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipo
     */
    select?: EquipoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Equipo
     */
    omit?: EquipoOmit<ExtArgs> | null
    /**
     * The data used to create many Equipos.
     */
    data: EquipoCreateManyInput | EquipoCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Equipo update
   */
  export type EquipoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipo
     */
    select?: EquipoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipo
     */
    omit?: EquipoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipoInclude<ExtArgs> | null
    /**
     * The data needed to update a Equipo.
     */
    data: XOR<EquipoUpdateInput, EquipoUncheckedUpdateInput>
    /**
     * Choose, which Equipo to update.
     */
    where: EquipoWhereUniqueInput
  }

  /**
   * Equipo updateMany
   */
  export type EquipoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Equipos.
     */
    data: XOR<EquipoUpdateManyMutationInput, EquipoUncheckedUpdateManyInput>
    /**
     * Filter which Equipos to update
     */
    where?: EquipoWhereInput
    /**
     * Limit how many Equipos to update.
     */
    limit?: number
  }

  /**
   * Equipo updateManyAndReturn
   */
  export type EquipoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipo
     */
    select?: EquipoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Equipo
     */
    omit?: EquipoOmit<ExtArgs> | null
    /**
     * The data used to update Equipos.
     */
    data: XOR<EquipoUpdateManyMutationInput, EquipoUncheckedUpdateManyInput>
    /**
     * Filter which Equipos to update
     */
    where?: EquipoWhereInput
    /**
     * Limit how many Equipos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Equipo upsert
   */
  export type EquipoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipo
     */
    select?: EquipoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipo
     */
    omit?: EquipoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipoInclude<ExtArgs> | null
    /**
     * The filter to search for the Equipo to update in case it exists.
     */
    where: EquipoWhereUniqueInput
    /**
     * In case the Equipo found by the `where` argument doesn't exist, create a new Equipo with this data.
     */
    create: XOR<EquipoCreateInput, EquipoUncheckedCreateInput>
    /**
     * In case the Equipo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EquipoUpdateInput, EquipoUncheckedUpdateInput>
  }

  /**
   * Equipo delete
   */
  export type EquipoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipo
     */
    select?: EquipoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipo
     */
    omit?: EquipoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipoInclude<ExtArgs> | null
    /**
     * Filter which Equipo to delete.
     */
    where: EquipoWhereUniqueInput
  }

  /**
   * Equipo deleteMany
   */
  export type EquipoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Equipos to delete
     */
    where?: EquipoWhereInput
    /**
     * Limit how many Equipos to delete.
     */
    limit?: number
  }

  /**
   * Equipo without action
   */
  export type EquipoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipo
     */
    select?: EquipoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipo
     */
    omit?: EquipoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipoInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CampeonatoScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    creacion: 'creacion'
  };

  export type CampeonatoScalarFieldEnum = (typeof CampeonatoScalarFieldEnum)[keyof typeof CampeonatoScalarFieldEnum]


  export const CategoriaScalarFieldEnum: {
    id: 'id',
    idCampeonato: 'idCampeonato',
    nombre: 'nombre',
    nEquipos: 'nEquipos',
    creacion: 'creacion'
  };

  export type CategoriaScalarFieldEnum = (typeof CategoriaScalarFieldEnum)[keyof typeof CategoriaScalarFieldEnum]


  export const EquipoScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    abreviatura: 'abreviatura',
    idCategoria: 'idCategoria',
    idCampeonato: 'idCampeonato',
    email: 'email',
    telefono: 'telefono',
    url_logo: 'url_logo'
  };

  export type EquipoScalarFieldEnum = (typeof EquipoScalarFieldEnum)[keyof typeof EquipoScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type CampeonatoWhereInput = {
    AND?: CampeonatoWhereInput | CampeonatoWhereInput[]
    OR?: CampeonatoWhereInput[]
    NOT?: CampeonatoWhereInput | CampeonatoWhereInput[]
    id?: IntFilter<"Campeonato"> | number
    nombre?: StringFilter<"Campeonato"> | string
    creacion?: DateTimeFilter<"Campeonato"> | Date | string
    categorias?: CategoriaListRelationFilter
    equipos?: EquipoListRelationFilter
  }

  export type CampeonatoOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    creacion?: SortOrder
    categorias?: CategoriaOrderByRelationAggregateInput
    equipos?: EquipoOrderByRelationAggregateInput
  }

  export type CampeonatoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CampeonatoWhereInput | CampeonatoWhereInput[]
    OR?: CampeonatoWhereInput[]
    NOT?: CampeonatoWhereInput | CampeonatoWhereInput[]
    nombre?: StringFilter<"Campeonato"> | string
    creacion?: DateTimeFilter<"Campeonato"> | Date | string
    categorias?: CategoriaListRelationFilter
    equipos?: EquipoListRelationFilter
  }, "id">

  export type CampeonatoOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    creacion?: SortOrder
    _count?: CampeonatoCountOrderByAggregateInput
    _avg?: CampeonatoAvgOrderByAggregateInput
    _max?: CampeonatoMaxOrderByAggregateInput
    _min?: CampeonatoMinOrderByAggregateInput
    _sum?: CampeonatoSumOrderByAggregateInput
  }

  export type CampeonatoScalarWhereWithAggregatesInput = {
    AND?: CampeonatoScalarWhereWithAggregatesInput | CampeonatoScalarWhereWithAggregatesInput[]
    OR?: CampeonatoScalarWhereWithAggregatesInput[]
    NOT?: CampeonatoScalarWhereWithAggregatesInput | CampeonatoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Campeonato"> | number
    nombre?: StringWithAggregatesFilter<"Campeonato"> | string
    creacion?: DateTimeWithAggregatesFilter<"Campeonato"> | Date | string
  }

  export type CategoriaWhereInput = {
    AND?: CategoriaWhereInput | CategoriaWhereInput[]
    OR?: CategoriaWhereInput[]
    NOT?: CategoriaWhereInput | CategoriaWhereInput[]
    id?: IntFilter<"Categoria"> | number
    idCampeonato?: IntFilter<"Categoria"> | number
    nombre?: StringFilter<"Categoria"> | string
    nEquipos?: IntFilter<"Categoria"> | number
    creacion?: DateTimeFilter<"Categoria"> | Date | string
    campeonato?: XOR<CampeonatoScalarRelationFilter, CampeonatoWhereInput>
    equipos?: EquipoListRelationFilter
  }

  export type CategoriaOrderByWithRelationInput = {
    id?: SortOrder
    idCampeonato?: SortOrder
    nombre?: SortOrder
    nEquipos?: SortOrder
    creacion?: SortOrder
    campeonato?: CampeonatoOrderByWithRelationInput
    equipos?: EquipoOrderByRelationAggregateInput
  }

  export type CategoriaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CategoriaWhereInput | CategoriaWhereInput[]
    OR?: CategoriaWhereInput[]
    NOT?: CategoriaWhereInput | CategoriaWhereInput[]
    idCampeonato?: IntFilter<"Categoria"> | number
    nombre?: StringFilter<"Categoria"> | string
    nEquipos?: IntFilter<"Categoria"> | number
    creacion?: DateTimeFilter<"Categoria"> | Date | string
    campeonato?: XOR<CampeonatoScalarRelationFilter, CampeonatoWhereInput>
    equipos?: EquipoListRelationFilter
  }, "id">

  export type CategoriaOrderByWithAggregationInput = {
    id?: SortOrder
    idCampeonato?: SortOrder
    nombre?: SortOrder
    nEquipos?: SortOrder
    creacion?: SortOrder
    _count?: CategoriaCountOrderByAggregateInput
    _avg?: CategoriaAvgOrderByAggregateInput
    _max?: CategoriaMaxOrderByAggregateInput
    _min?: CategoriaMinOrderByAggregateInput
    _sum?: CategoriaSumOrderByAggregateInput
  }

  export type CategoriaScalarWhereWithAggregatesInput = {
    AND?: CategoriaScalarWhereWithAggregatesInput | CategoriaScalarWhereWithAggregatesInput[]
    OR?: CategoriaScalarWhereWithAggregatesInput[]
    NOT?: CategoriaScalarWhereWithAggregatesInput | CategoriaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Categoria"> | number
    idCampeonato?: IntWithAggregatesFilter<"Categoria"> | number
    nombre?: StringWithAggregatesFilter<"Categoria"> | string
    nEquipos?: IntWithAggregatesFilter<"Categoria"> | number
    creacion?: DateTimeWithAggregatesFilter<"Categoria"> | Date | string
  }

  export type EquipoWhereInput = {
    AND?: EquipoWhereInput | EquipoWhereInput[]
    OR?: EquipoWhereInput[]
    NOT?: EquipoWhereInput | EquipoWhereInput[]
    id?: IntFilter<"Equipo"> | number
    nombre?: StringFilter<"Equipo"> | string
    abreviatura?: StringFilter<"Equipo"> | string
    idCategoria?: IntFilter<"Equipo"> | number
    idCampeonato?: IntFilter<"Equipo"> | number
    email?: StringFilter<"Equipo"> | string
    telefono?: StringFilter<"Equipo"> | string
    url_logo?: StringFilter<"Equipo"> | string
    categoria?: XOR<CategoriaScalarRelationFilter, CategoriaWhereInput>
    campeonato?: XOR<CampeonatoScalarRelationFilter, CampeonatoWhereInput>
  }

  export type EquipoOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    abreviatura?: SortOrder
    idCategoria?: SortOrder
    idCampeonato?: SortOrder
    email?: SortOrder
    telefono?: SortOrder
    url_logo?: SortOrder
    categoria?: CategoriaOrderByWithRelationInput
    campeonato?: CampeonatoOrderByWithRelationInput
  }

  export type EquipoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: EquipoWhereInput | EquipoWhereInput[]
    OR?: EquipoWhereInput[]
    NOT?: EquipoWhereInput | EquipoWhereInput[]
    nombre?: StringFilter<"Equipo"> | string
    abreviatura?: StringFilter<"Equipo"> | string
    idCategoria?: IntFilter<"Equipo"> | number
    idCampeonato?: IntFilter<"Equipo"> | number
    email?: StringFilter<"Equipo"> | string
    telefono?: StringFilter<"Equipo"> | string
    url_logo?: StringFilter<"Equipo"> | string
    categoria?: XOR<CategoriaScalarRelationFilter, CategoriaWhereInput>
    campeonato?: XOR<CampeonatoScalarRelationFilter, CampeonatoWhereInput>
  }, "id">

  export type EquipoOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    abreviatura?: SortOrder
    idCategoria?: SortOrder
    idCampeonato?: SortOrder
    email?: SortOrder
    telefono?: SortOrder
    url_logo?: SortOrder
    _count?: EquipoCountOrderByAggregateInput
    _avg?: EquipoAvgOrderByAggregateInput
    _max?: EquipoMaxOrderByAggregateInput
    _min?: EquipoMinOrderByAggregateInput
    _sum?: EquipoSumOrderByAggregateInput
  }

  export type EquipoScalarWhereWithAggregatesInput = {
    AND?: EquipoScalarWhereWithAggregatesInput | EquipoScalarWhereWithAggregatesInput[]
    OR?: EquipoScalarWhereWithAggregatesInput[]
    NOT?: EquipoScalarWhereWithAggregatesInput | EquipoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Equipo"> | number
    nombre?: StringWithAggregatesFilter<"Equipo"> | string
    abreviatura?: StringWithAggregatesFilter<"Equipo"> | string
    idCategoria?: IntWithAggregatesFilter<"Equipo"> | number
    idCampeonato?: IntWithAggregatesFilter<"Equipo"> | number
    email?: StringWithAggregatesFilter<"Equipo"> | string
    telefono?: StringWithAggregatesFilter<"Equipo"> | string
    url_logo?: StringWithAggregatesFilter<"Equipo"> | string
  }

  export type CampeonatoCreateInput = {
    nombre: string
    creacion?: Date | string
    categorias?: CategoriaCreateNestedManyWithoutCampeonatoInput
    equipos?: EquipoCreateNestedManyWithoutCampeonatoInput
  }

  export type CampeonatoUncheckedCreateInput = {
    id?: number
    nombre: string
    creacion?: Date | string
    categorias?: CategoriaUncheckedCreateNestedManyWithoutCampeonatoInput
    equipos?: EquipoUncheckedCreateNestedManyWithoutCampeonatoInput
  }

  export type CampeonatoUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    categorias?: CategoriaUpdateManyWithoutCampeonatoNestedInput
    equipos?: EquipoUpdateManyWithoutCampeonatoNestedInput
  }

  export type CampeonatoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    categorias?: CategoriaUncheckedUpdateManyWithoutCampeonatoNestedInput
    equipos?: EquipoUncheckedUpdateManyWithoutCampeonatoNestedInput
  }

  export type CampeonatoCreateManyInput = {
    id?: number
    nombre: string
    creacion?: Date | string
  }

  export type CampeonatoUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    creacion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CampeonatoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    creacion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoriaCreateInput = {
    nombre: string
    nEquipos?: number
    creacion?: Date | string
    campeonato: CampeonatoCreateNestedOneWithoutCategoriasInput
    equipos?: EquipoCreateNestedManyWithoutCategoriaInput
  }

  export type CategoriaUncheckedCreateInput = {
    id?: number
    idCampeonato: number
    nombre: string
    nEquipos?: number
    creacion?: Date | string
    equipos?: EquipoUncheckedCreateNestedManyWithoutCategoriaInput
  }

  export type CategoriaUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    nEquipos?: IntFieldUpdateOperationsInput | number
    creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    campeonato?: CampeonatoUpdateOneRequiredWithoutCategoriasNestedInput
    equipos?: EquipoUpdateManyWithoutCategoriaNestedInput
  }

  export type CategoriaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    idCampeonato?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    nEquipos?: IntFieldUpdateOperationsInput | number
    creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    equipos?: EquipoUncheckedUpdateManyWithoutCategoriaNestedInput
  }

  export type CategoriaCreateManyInput = {
    id?: number
    idCampeonato: number
    nombre: string
    nEquipos?: number
    creacion?: Date | string
  }

  export type CategoriaUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    nEquipos?: IntFieldUpdateOperationsInput | number
    creacion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoriaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    idCampeonato?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    nEquipos?: IntFieldUpdateOperationsInput | number
    creacion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EquipoCreateInput = {
    nombre: string
    abreviatura: string
    email: string
    telefono: string
    url_logo: string
    categoria: CategoriaCreateNestedOneWithoutEquiposInput
    campeonato: CampeonatoCreateNestedOneWithoutEquiposInput
  }

  export type EquipoUncheckedCreateInput = {
    id?: number
    nombre: string
    abreviatura: string
    idCategoria: number
    idCampeonato: number
    email: string
    telefono: string
    url_logo: string
  }

  export type EquipoUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    abreviatura?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    url_logo?: StringFieldUpdateOperationsInput | string
    categoria?: CategoriaUpdateOneRequiredWithoutEquiposNestedInput
    campeonato?: CampeonatoUpdateOneRequiredWithoutEquiposNestedInput
  }

  export type EquipoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    abreviatura?: StringFieldUpdateOperationsInput | string
    idCategoria?: IntFieldUpdateOperationsInput | number
    idCampeonato?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    url_logo?: StringFieldUpdateOperationsInput | string
  }

  export type EquipoCreateManyInput = {
    id?: number
    nombre: string
    abreviatura: string
    idCategoria: number
    idCampeonato: number
    email: string
    telefono: string
    url_logo: string
  }

  export type EquipoUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    abreviatura?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    url_logo?: StringFieldUpdateOperationsInput | string
  }

  export type EquipoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    abreviatura?: StringFieldUpdateOperationsInput | string
    idCategoria?: IntFieldUpdateOperationsInput | number
    idCampeonato?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    url_logo?: StringFieldUpdateOperationsInput | string
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

  export type CategoriaListRelationFilter = {
    every?: CategoriaWhereInput
    some?: CategoriaWhereInput
    none?: CategoriaWhereInput
  }

  export type EquipoListRelationFilter = {
    every?: EquipoWhereInput
    some?: EquipoWhereInput
    none?: EquipoWhereInput
  }

  export type CategoriaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EquipoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CampeonatoCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    creacion?: SortOrder
  }

  export type CampeonatoAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CampeonatoMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    creacion?: SortOrder
  }

  export type CampeonatoMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    creacion?: SortOrder
  }

  export type CampeonatoSumOrderByAggregateInput = {
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

  export type CampeonatoScalarRelationFilter = {
    is?: CampeonatoWhereInput
    isNot?: CampeonatoWhereInput
  }

  export type CategoriaCountOrderByAggregateInput = {
    id?: SortOrder
    idCampeonato?: SortOrder
    nombre?: SortOrder
    nEquipos?: SortOrder
    creacion?: SortOrder
  }

  export type CategoriaAvgOrderByAggregateInput = {
    id?: SortOrder
    idCampeonato?: SortOrder
    nEquipos?: SortOrder
  }

  export type CategoriaMaxOrderByAggregateInput = {
    id?: SortOrder
    idCampeonato?: SortOrder
    nombre?: SortOrder
    nEquipos?: SortOrder
    creacion?: SortOrder
  }

  export type CategoriaMinOrderByAggregateInput = {
    id?: SortOrder
    idCampeonato?: SortOrder
    nombre?: SortOrder
    nEquipos?: SortOrder
    creacion?: SortOrder
  }

  export type CategoriaSumOrderByAggregateInput = {
    id?: SortOrder
    idCampeonato?: SortOrder
    nEquipos?: SortOrder
  }

  export type CategoriaScalarRelationFilter = {
    is?: CategoriaWhereInput
    isNot?: CategoriaWhereInput
  }

  export type EquipoCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    abreviatura?: SortOrder
    idCategoria?: SortOrder
    idCampeonato?: SortOrder
    email?: SortOrder
    telefono?: SortOrder
    url_logo?: SortOrder
  }

  export type EquipoAvgOrderByAggregateInput = {
    id?: SortOrder
    idCategoria?: SortOrder
    idCampeonato?: SortOrder
  }

  export type EquipoMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    abreviatura?: SortOrder
    idCategoria?: SortOrder
    idCampeonato?: SortOrder
    email?: SortOrder
    telefono?: SortOrder
    url_logo?: SortOrder
  }

  export type EquipoMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    abreviatura?: SortOrder
    idCategoria?: SortOrder
    idCampeonato?: SortOrder
    email?: SortOrder
    telefono?: SortOrder
    url_logo?: SortOrder
  }

  export type EquipoSumOrderByAggregateInput = {
    id?: SortOrder
    idCategoria?: SortOrder
    idCampeonato?: SortOrder
  }

  export type CategoriaCreateNestedManyWithoutCampeonatoInput = {
    create?: XOR<CategoriaCreateWithoutCampeonatoInput, CategoriaUncheckedCreateWithoutCampeonatoInput> | CategoriaCreateWithoutCampeonatoInput[] | CategoriaUncheckedCreateWithoutCampeonatoInput[]
    connectOrCreate?: CategoriaCreateOrConnectWithoutCampeonatoInput | CategoriaCreateOrConnectWithoutCampeonatoInput[]
    createMany?: CategoriaCreateManyCampeonatoInputEnvelope
    connect?: CategoriaWhereUniqueInput | CategoriaWhereUniqueInput[]
  }

  export type EquipoCreateNestedManyWithoutCampeonatoInput = {
    create?: XOR<EquipoCreateWithoutCampeonatoInput, EquipoUncheckedCreateWithoutCampeonatoInput> | EquipoCreateWithoutCampeonatoInput[] | EquipoUncheckedCreateWithoutCampeonatoInput[]
    connectOrCreate?: EquipoCreateOrConnectWithoutCampeonatoInput | EquipoCreateOrConnectWithoutCampeonatoInput[]
    createMany?: EquipoCreateManyCampeonatoInputEnvelope
    connect?: EquipoWhereUniqueInput | EquipoWhereUniqueInput[]
  }

  export type CategoriaUncheckedCreateNestedManyWithoutCampeonatoInput = {
    create?: XOR<CategoriaCreateWithoutCampeonatoInput, CategoriaUncheckedCreateWithoutCampeonatoInput> | CategoriaCreateWithoutCampeonatoInput[] | CategoriaUncheckedCreateWithoutCampeonatoInput[]
    connectOrCreate?: CategoriaCreateOrConnectWithoutCampeonatoInput | CategoriaCreateOrConnectWithoutCampeonatoInput[]
    createMany?: CategoriaCreateManyCampeonatoInputEnvelope
    connect?: CategoriaWhereUniqueInput | CategoriaWhereUniqueInput[]
  }

  export type EquipoUncheckedCreateNestedManyWithoutCampeonatoInput = {
    create?: XOR<EquipoCreateWithoutCampeonatoInput, EquipoUncheckedCreateWithoutCampeonatoInput> | EquipoCreateWithoutCampeonatoInput[] | EquipoUncheckedCreateWithoutCampeonatoInput[]
    connectOrCreate?: EquipoCreateOrConnectWithoutCampeonatoInput | EquipoCreateOrConnectWithoutCampeonatoInput[]
    createMany?: EquipoCreateManyCampeonatoInputEnvelope
    connect?: EquipoWhereUniqueInput | EquipoWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type CategoriaUpdateManyWithoutCampeonatoNestedInput = {
    create?: XOR<CategoriaCreateWithoutCampeonatoInput, CategoriaUncheckedCreateWithoutCampeonatoInput> | CategoriaCreateWithoutCampeonatoInput[] | CategoriaUncheckedCreateWithoutCampeonatoInput[]
    connectOrCreate?: CategoriaCreateOrConnectWithoutCampeonatoInput | CategoriaCreateOrConnectWithoutCampeonatoInput[]
    upsert?: CategoriaUpsertWithWhereUniqueWithoutCampeonatoInput | CategoriaUpsertWithWhereUniqueWithoutCampeonatoInput[]
    createMany?: CategoriaCreateManyCampeonatoInputEnvelope
    set?: CategoriaWhereUniqueInput | CategoriaWhereUniqueInput[]
    disconnect?: CategoriaWhereUniqueInput | CategoriaWhereUniqueInput[]
    delete?: CategoriaWhereUniqueInput | CategoriaWhereUniqueInput[]
    connect?: CategoriaWhereUniqueInput | CategoriaWhereUniqueInput[]
    update?: CategoriaUpdateWithWhereUniqueWithoutCampeonatoInput | CategoriaUpdateWithWhereUniqueWithoutCampeonatoInput[]
    updateMany?: CategoriaUpdateManyWithWhereWithoutCampeonatoInput | CategoriaUpdateManyWithWhereWithoutCampeonatoInput[]
    deleteMany?: CategoriaScalarWhereInput | CategoriaScalarWhereInput[]
  }

  export type EquipoUpdateManyWithoutCampeonatoNestedInput = {
    create?: XOR<EquipoCreateWithoutCampeonatoInput, EquipoUncheckedCreateWithoutCampeonatoInput> | EquipoCreateWithoutCampeonatoInput[] | EquipoUncheckedCreateWithoutCampeonatoInput[]
    connectOrCreate?: EquipoCreateOrConnectWithoutCampeonatoInput | EquipoCreateOrConnectWithoutCampeonatoInput[]
    upsert?: EquipoUpsertWithWhereUniqueWithoutCampeonatoInput | EquipoUpsertWithWhereUniqueWithoutCampeonatoInput[]
    createMany?: EquipoCreateManyCampeonatoInputEnvelope
    set?: EquipoWhereUniqueInput | EquipoWhereUniqueInput[]
    disconnect?: EquipoWhereUniqueInput | EquipoWhereUniqueInput[]
    delete?: EquipoWhereUniqueInput | EquipoWhereUniqueInput[]
    connect?: EquipoWhereUniqueInput | EquipoWhereUniqueInput[]
    update?: EquipoUpdateWithWhereUniqueWithoutCampeonatoInput | EquipoUpdateWithWhereUniqueWithoutCampeonatoInput[]
    updateMany?: EquipoUpdateManyWithWhereWithoutCampeonatoInput | EquipoUpdateManyWithWhereWithoutCampeonatoInput[]
    deleteMany?: EquipoScalarWhereInput | EquipoScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CategoriaUncheckedUpdateManyWithoutCampeonatoNestedInput = {
    create?: XOR<CategoriaCreateWithoutCampeonatoInput, CategoriaUncheckedCreateWithoutCampeonatoInput> | CategoriaCreateWithoutCampeonatoInput[] | CategoriaUncheckedCreateWithoutCampeonatoInput[]
    connectOrCreate?: CategoriaCreateOrConnectWithoutCampeonatoInput | CategoriaCreateOrConnectWithoutCampeonatoInput[]
    upsert?: CategoriaUpsertWithWhereUniqueWithoutCampeonatoInput | CategoriaUpsertWithWhereUniqueWithoutCampeonatoInput[]
    createMany?: CategoriaCreateManyCampeonatoInputEnvelope
    set?: CategoriaWhereUniqueInput | CategoriaWhereUniqueInput[]
    disconnect?: CategoriaWhereUniqueInput | CategoriaWhereUniqueInput[]
    delete?: CategoriaWhereUniqueInput | CategoriaWhereUniqueInput[]
    connect?: CategoriaWhereUniqueInput | CategoriaWhereUniqueInput[]
    update?: CategoriaUpdateWithWhereUniqueWithoutCampeonatoInput | CategoriaUpdateWithWhereUniqueWithoutCampeonatoInput[]
    updateMany?: CategoriaUpdateManyWithWhereWithoutCampeonatoInput | CategoriaUpdateManyWithWhereWithoutCampeonatoInput[]
    deleteMany?: CategoriaScalarWhereInput | CategoriaScalarWhereInput[]
  }

  export type EquipoUncheckedUpdateManyWithoutCampeonatoNestedInput = {
    create?: XOR<EquipoCreateWithoutCampeonatoInput, EquipoUncheckedCreateWithoutCampeonatoInput> | EquipoCreateWithoutCampeonatoInput[] | EquipoUncheckedCreateWithoutCampeonatoInput[]
    connectOrCreate?: EquipoCreateOrConnectWithoutCampeonatoInput | EquipoCreateOrConnectWithoutCampeonatoInput[]
    upsert?: EquipoUpsertWithWhereUniqueWithoutCampeonatoInput | EquipoUpsertWithWhereUniqueWithoutCampeonatoInput[]
    createMany?: EquipoCreateManyCampeonatoInputEnvelope
    set?: EquipoWhereUniqueInput | EquipoWhereUniqueInput[]
    disconnect?: EquipoWhereUniqueInput | EquipoWhereUniqueInput[]
    delete?: EquipoWhereUniqueInput | EquipoWhereUniqueInput[]
    connect?: EquipoWhereUniqueInput | EquipoWhereUniqueInput[]
    update?: EquipoUpdateWithWhereUniqueWithoutCampeonatoInput | EquipoUpdateWithWhereUniqueWithoutCampeonatoInput[]
    updateMany?: EquipoUpdateManyWithWhereWithoutCampeonatoInput | EquipoUpdateManyWithWhereWithoutCampeonatoInput[]
    deleteMany?: EquipoScalarWhereInput | EquipoScalarWhereInput[]
  }

  export type CampeonatoCreateNestedOneWithoutCategoriasInput = {
    create?: XOR<CampeonatoCreateWithoutCategoriasInput, CampeonatoUncheckedCreateWithoutCategoriasInput>
    connectOrCreate?: CampeonatoCreateOrConnectWithoutCategoriasInput
    connect?: CampeonatoWhereUniqueInput
  }

  export type EquipoCreateNestedManyWithoutCategoriaInput = {
    create?: XOR<EquipoCreateWithoutCategoriaInput, EquipoUncheckedCreateWithoutCategoriaInput> | EquipoCreateWithoutCategoriaInput[] | EquipoUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: EquipoCreateOrConnectWithoutCategoriaInput | EquipoCreateOrConnectWithoutCategoriaInput[]
    createMany?: EquipoCreateManyCategoriaInputEnvelope
    connect?: EquipoWhereUniqueInput | EquipoWhereUniqueInput[]
  }

  export type EquipoUncheckedCreateNestedManyWithoutCategoriaInput = {
    create?: XOR<EquipoCreateWithoutCategoriaInput, EquipoUncheckedCreateWithoutCategoriaInput> | EquipoCreateWithoutCategoriaInput[] | EquipoUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: EquipoCreateOrConnectWithoutCategoriaInput | EquipoCreateOrConnectWithoutCategoriaInput[]
    createMany?: EquipoCreateManyCategoriaInputEnvelope
    connect?: EquipoWhereUniqueInput | EquipoWhereUniqueInput[]
  }

  export type CampeonatoUpdateOneRequiredWithoutCategoriasNestedInput = {
    create?: XOR<CampeonatoCreateWithoutCategoriasInput, CampeonatoUncheckedCreateWithoutCategoriasInput>
    connectOrCreate?: CampeonatoCreateOrConnectWithoutCategoriasInput
    upsert?: CampeonatoUpsertWithoutCategoriasInput
    connect?: CampeonatoWhereUniqueInput
    update?: XOR<XOR<CampeonatoUpdateToOneWithWhereWithoutCategoriasInput, CampeonatoUpdateWithoutCategoriasInput>, CampeonatoUncheckedUpdateWithoutCategoriasInput>
  }

  export type EquipoUpdateManyWithoutCategoriaNestedInput = {
    create?: XOR<EquipoCreateWithoutCategoriaInput, EquipoUncheckedCreateWithoutCategoriaInput> | EquipoCreateWithoutCategoriaInput[] | EquipoUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: EquipoCreateOrConnectWithoutCategoriaInput | EquipoCreateOrConnectWithoutCategoriaInput[]
    upsert?: EquipoUpsertWithWhereUniqueWithoutCategoriaInput | EquipoUpsertWithWhereUniqueWithoutCategoriaInput[]
    createMany?: EquipoCreateManyCategoriaInputEnvelope
    set?: EquipoWhereUniqueInput | EquipoWhereUniqueInput[]
    disconnect?: EquipoWhereUniqueInput | EquipoWhereUniqueInput[]
    delete?: EquipoWhereUniqueInput | EquipoWhereUniqueInput[]
    connect?: EquipoWhereUniqueInput | EquipoWhereUniqueInput[]
    update?: EquipoUpdateWithWhereUniqueWithoutCategoriaInput | EquipoUpdateWithWhereUniqueWithoutCategoriaInput[]
    updateMany?: EquipoUpdateManyWithWhereWithoutCategoriaInput | EquipoUpdateManyWithWhereWithoutCategoriaInput[]
    deleteMany?: EquipoScalarWhereInput | EquipoScalarWhereInput[]
  }

  export type EquipoUncheckedUpdateManyWithoutCategoriaNestedInput = {
    create?: XOR<EquipoCreateWithoutCategoriaInput, EquipoUncheckedCreateWithoutCategoriaInput> | EquipoCreateWithoutCategoriaInput[] | EquipoUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: EquipoCreateOrConnectWithoutCategoriaInput | EquipoCreateOrConnectWithoutCategoriaInput[]
    upsert?: EquipoUpsertWithWhereUniqueWithoutCategoriaInput | EquipoUpsertWithWhereUniqueWithoutCategoriaInput[]
    createMany?: EquipoCreateManyCategoriaInputEnvelope
    set?: EquipoWhereUniqueInput | EquipoWhereUniqueInput[]
    disconnect?: EquipoWhereUniqueInput | EquipoWhereUniqueInput[]
    delete?: EquipoWhereUniqueInput | EquipoWhereUniqueInput[]
    connect?: EquipoWhereUniqueInput | EquipoWhereUniqueInput[]
    update?: EquipoUpdateWithWhereUniqueWithoutCategoriaInput | EquipoUpdateWithWhereUniqueWithoutCategoriaInput[]
    updateMany?: EquipoUpdateManyWithWhereWithoutCategoriaInput | EquipoUpdateManyWithWhereWithoutCategoriaInput[]
    deleteMany?: EquipoScalarWhereInput | EquipoScalarWhereInput[]
  }

  export type CategoriaCreateNestedOneWithoutEquiposInput = {
    create?: XOR<CategoriaCreateWithoutEquiposInput, CategoriaUncheckedCreateWithoutEquiposInput>
    connectOrCreate?: CategoriaCreateOrConnectWithoutEquiposInput
    connect?: CategoriaWhereUniqueInput
  }

  export type CampeonatoCreateNestedOneWithoutEquiposInput = {
    create?: XOR<CampeonatoCreateWithoutEquiposInput, CampeonatoUncheckedCreateWithoutEquiposInput>
    connectOrCreate?: CampeonatoCreateOrConnectWithoutEquiposInput
    connect?: CampeonatoWhereUniqueInput
  }

  export type CategoriaUpdateOneRequiredWithoutEquiposNestedInput = {
    create?: XOR<CategoriaCreateWithoutEquiposInput, CategoriaUncheckedCreateWithoutEquiposInput>
    connectOrCreate?: CategoriaCreateOrConnectWithoutEquiposInput
    upsert?: CategoriaUpsertWithoutEquiposInput
    connect?: CategoriaWhereUniqueInput
    update?: XOR<XOR<CategoriaUpdateToOneWithWhereWithoutEquiposInput, CategoriaUpdateWithoutEquiposInput>, CategoriaUncheckedUpdateWithoutEquiposInput>
  }

  export type CampeonatoUpdateOneRequiredWithoutEquiposNestedInput = {
    create?: XOR<CampeonatoCreateWithoutEquiposInput, CampeonatoUncheckedCreateWithoutEquiposInput>
    connectOrCreate?: CampeonatoCreateOrConnectWithoutEquiposInput
    upsert?: CampeonatoUpsertWithoutEquiposInput
    connect?: CampeonatoWhereUniqueInput
    update?: XOR<XOR<CampeonatoUpdateToOneWithWhereWithoutEquiposInput, CampeonatoUpdateWithoutEquiposInput>, CampeonatoUncheckedUpdateWithoutEquiposInput>
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

  export type CategoriaCreateWithoutCampeonatoInput = {
    nombre: string
    nEquipos?: number
    creacion?: Date | string
    equipos?: EquipoCreateNestedManyWithoutCategoriaInput
  }

  export type CategoriaUncheckedCreateWithoutCampeonatoInput = {
    id?: number
    nombre: string
    nEquipos?: number
    creacion?: Date | string
    equipos?: EquipoUncheckedCreateNestedManyWithoutCategoriaInput
  }

  export type CategoriaCreateOrConnectWithoutCampeonatoInput = {
    where: CategoriaWhereUniqueInput
    create: XOR<CategoriaCreateWithoutCampeonatoInput, CategoriaUncheckedCreateWithoutCampeonatoInput>
  }

  export type CategoriaCreateManyCampeonatoInputEnvelope = {
    data: CategoriaCreateManyCampeonatoInput | CategoriaCreateManyCampeonatoInput[]
  }

  export type EquipoCreateWithoutCampeonatoInput = {
    nombre: string
    abreviatura: string
    email: string
    telefono: string
    url_logo: string
    categoria: CategoriaCreateNestedOneWithoutEquiposInput
  }

  export type EquipoUncheckedCreateWithoutCampeonatoInput = {
    id?: number
    nombre: string
    abreviatura: string
    idCategoria: number
    email: string
    telefono: string
    url_logo: string
  }

  export type EquipoCreateOrConnectWithoutCampeonatoInput = {
    where: EquipoWhereUniqueInput
    create: XOR<EquipoCreateWithoutCampeonatoInput, EquipoUncheckedCreateWithoutCampeonatoInput>
  }

  export type EquipoCreateManyCampeonatoInputEnvelope = {
    data: EquipoCreateManyCampeonatoInput | EquipoCreateManyCampeonatoInput[]
  }

  export type CategoriaUpsertWithWhereUniqueWithoutCampeonatoInput = {
    where: CategoriaWhereUniqueInput
    update: XOR<CategoriaUpdateWithoutCampeonatoInput, CategoriaUncheckedUpdateWithoutCampeonatoInput>
    create: XOR<CategoriaCreateWithoutCampeonatoInput, CategoriaUncheckedCreateWithoutCampeonatoInput>
  }

  export type CategoriaUpdateWithWhereUniqueWithoutCampeonatoInput = {
    where: CategoriaWhereUniqueInput
    data: XOR<CategoriaUpdateWithoutCampeonatoInput, CategoriaUncheckedUpdateWithoutCampeonatoInput>
  }

  export type CategoriaUpdateManyWithWhereWithoutCampeonatoInput = {
    where: CategoriaScalarWhereInput
    data: XOR<CategoriaUpdateManyMutationInput, CategoriaUncheckedUpdateManyWithoutCampeonatoInput>
  }

  export type CategoriaScalarWhereInput = {
    AND?: CategoriaScalarWhereInput | CategoriaScalarWhereInput[]
    OR?: CategoriaScalarWhereInput[]
    NOT?: CategoriaScalarWhereInput | CategoriaScalarWhereInput[]
    id?: IntFilter<"Categoria"> | number
    idCampeonato?: IntFilter<"Categoria"> | number
    nombre?: StringFilter<"Categoria"> | string
    nEquipos?: IntFilter<"Categoria"> | number
    creacion?: DateTimeFilter<"Categoria"> | Date | string
  }

  export type EquipoUpsertWithWhereUniqueWithoutCampeonatoInput = {
    where: EquipoWhereUniqueInput
    update: XOR<EquipoUpdateWithoutCampeonatoInput, EquipoUncheckedUpdateWithoutCampeonatoInput>
    create: XOR<EquipoCreateWithoutCampeonatoInput, EquipoUncheckedCreateWithoutCampeonatoInput>
  }

  export type EquipoUpdateWithWhereUniqueWithoutCampeonatoInput = {
    where: EquipoWhereUniqueInput
    data: XOR<EquipoUpdateWithoutCampeonatoInput, EquipoUncheckedUpdateWithoutCampeonatoInput>
  }

  export type EquipoUpdateManyWithWhereWithoutCampeonatoInput = {
    where: EquipoScalarWhereInput
    data: XOR<EquipoUpdateManyMutationInput, EquipoUncheckedUpdateManyWithoutCampeonatoInput>
  }

  export type EquipoScalarWhereInput = {
    AND?: EquipoScalarWhereInput | EquipoScalarWhereInput[]
    OR?: EquipoScalarWhereInput[]
    NOT?: EquipoScalarWhereInput | EquipoScalarWhereInput[]
    id?: IntFilter<"Equipo"> | number
    nombre?: StringFilter<"Equipo"> | string
    abreviatura?: StringFilter<"Equipo"> | string
    idCategoria?: IntFilter<"Equipo"> | number
    idCampeonato?: IntFilter<"Equipo"> | number
    email?: StringFilter<"Equipo"> | string
    telefono?: StringFilter<"Equipo"> | string
    url_logo?: StringFilter<"Equipo"> | string
  }

  export type CampeonatoCreateWithoutCategoriasInput = {
    nombre: string
    creacion?: Date | string
    equipos?: EquipoCreateNestedManyWithoutCampeonatoInput
  }

  export type CampeonatoUncheckedCreateWithoutCategoriasInput = {
    id?: number
    nombre: string
    creacion?: Date | string
    equipos?: EquipoUncheckedCreateNestedManyWithoutCampeonatoInput
  }

  export type CampeonatoCreateOrConnectWithoutCategoriasInput = {
    where: CampeonatoWhereUniqueInput
    create: XOR<CampeonatoCreateWithoutCategoriasInput, CampeonatoUncheckedCreateWithoutCategoriasInput>
  }

  export type EquipoCreateWithoutCategoriaInput = {
    nombre: string
    abreviatura: string
    email: string
    telefono: string
    url_logo: string
    campeonato: CampeonatoCreateNestedOneWithoutEquiposInput
  }

  export type EquipoUncheckedCreateWithoutCategoriaInput = {
    id?: number
    nombre: string
    abreviatura: string
    idCampeonato: number
    email: string
    telefono: string
    url_logo: string
  }

  export type EquipoCreateOrConnectWithoutCategoriaInput = {
    where: EquipoWhereUniqueInput
    create: XOR<EquipoCreateWithoutCategoriaInput, EquipoUncheckedCreateWithoutCategoriaInput>
  }

  export type EquipoCreateManyCategoriaInputEnvelope = {
    data: EquipoCreateManyCategoriaInput | EquipoCreateManyCategoriaInput[]
  }

  export type CampeonatoUpsertWithoutCategoriasInput = {
    update: XOR<CampeonatoUpdateWithoutCategoriasInput, CampeonatoUncheckedUpdateWithoutCategoriasInput>
    create: XOR<CampeonatoCreateWithoutCategoriasInput, CampeonatoUncheckedCreateWithoutCategoriasInput>
    where?: CampeonatoWhereInput
  }

  export type CampeonatoUpdateToOneWithWhereWithoutCategoriasInput = {
    where?: CampeonatoWhereInput
    data: XOR<CampeonatoUpdateWithoutCategoriasInput, CampeonatoUncheckedUpdateWithoutCategoriasInput>
  }

  export type CampeonatoUpdateWithoutCategoriasInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    equipos?: EquipoUpdateManyWithoutCampeonatoNestedInput
  }

  export type CampeonatoUncheckedUpdateWithoutCategoriasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    equipos?: EquipoUncheckedUpdateManyWithoutCampeonatoNestedInput
  }

  export type EquipoUpsertWithWhereUniqueWithoutCategoriaInput = {
    where: EquipoWhereUniqueInput
    update: XOR<EquipoUpdateWithoutCategoriaInput, EquipoUncheckedUpdateWithoutCategoriaInput>
    create: XOR<EquipoCreateWithoutCategoriaInput, EquipoUncheckedCreateWithoutCategoriaInput>
  }

  export type EquipoUpdateWithWhereUniqueWithoutCategoriaInput = {
    where: EquipoWhereUniqueInput
    data: XOR<EquipoUpdateWithoutCategoriaInput, EquipoUncheckedUpdateWithoutCategoriaInput>
  }

  export type EquipoUpdateManyWithWhereWithoutCategoriaInput = {
    where: EquipoScalarWhereInput
    data: XOR<EquipoUpdateManyMutationInput, EquipoUncheckedUpdateManyWithoutCategoriaInput>
  }

  export type CategoriaCreateWithoutEquiposInput = {
    nombre: string
    nEquipos?: number
    creacion?: Date | string
    campeonato: CampeonatoCreateNestedOneWithoutCategoriasInput
  }

  export type CategoriaUncheckedCreateWithoutEquiposInput = {
    id?: number
    idCampeonato: number
    nombre: string
    nEquipos?: number
    creacion?: Date | string
  }

  export type CategoriaCreateOrConnectWithoutEquiposInput = {
    where: CategoriaWhereUniqueInput
    create: XOR<CategoriaCreateWithoutEquiposInput, CategoriaUncheckedCreateWithoutEquiposInput>
  }

  export type CampeonatoCreateWithoutEquiposInput = {
    nombre: string
    creacion?: Date | string
    categorias?: CategoriaCreateNestedManyWithoutCampeonatoInput
  }

  export type CampeonatoUncheckedCreateWithoutEquiposInput = {
    id?: number
    nombre: string
    creacion?: Date | string
    categorias?: CategoriaUncheckedCreateNestedManyWithoutCampeonatoInput
  }

  export type CampeonatoCreateOrConnectWithoutEquiposInput = {
    where: CampeonatoWhereUniqueInput
    create: XOR<CampeonatoCreateWithoutEquiposInput, CampeonatoUncheckedCreateWithoutEquiposInput>
  }

  export type CategoriaUpsertWithoutEquiposInput = {
    update: XOR<CategoriaUpdateWithoutEquiposInput, CategoriaUncheckedUpdateWithoutEquiposInput>
    create: XOR<CategoriaCreateWithoutEquiposInput, CategoriaUncheckedCreateWithoutEquiposInput>
    where?: CategoriaWhereInput
  }

  export type CategoriaUpdateToOneWithWhereWithoutEquiposInput = {
    where?: CategoriaWhereInput
    data: XOR<CategoriaUpdateWithoutEquiposInput, CategoriaUncheckedUpdateWithoutEquiposInput>
  }

  export type CategoriaUpdateWithoutEquiposInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    nEquipos?: IntFieldUpdateOperationsInput | number
    creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    campeonato?: CampeonatoUpdateOneRequiredWithoutCategoriasNestedInput
  }

  export type CategoriaUncheckedUpdateWithoutEquiposInput = {
    id?: IntFieldUpdateOperationsInput | number
    idCampeonato?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    nEquipos?: IntFieldUpdateOperationsInput | number
    creacion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CampeonatoUpsertWithoutEquiposInput = {
    update: XOR<CampeonatoUpdateWithoutEquiposInput, CampeonatoUncheckedUpdateWithoutEquiposInput>
    create: XOR<CampeonatoCreateWithoutEquiposInput, CampeonatoUncheckedCreateWithoutEquiposInput>
    where?: CampeonatoWhereInput
  }

  export type CampeonatoUpdateToOneWithWhereWithoutEquiposInput = {
    where?: CampeonatoWhereInput
    data: XOR<CampeonatoUpdateWithoutEquiposInput, CampeonatoUncheckedUpdateWithoutEquiposInput>
  }

  export type CampeonatoUpdateWithoutEquiposInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    categorias?: CategoriaUpdateManyWithoutCampeonatoNestedInput
  }

  export type CampeonatoUncheckedUpdateWithoutEquiposInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    categorias?: CategoriaUncheckedUpdateManyWithoutCampeonatoNestedInput
  }

  export type CategoriaCreateManyCampeonatoInput = {
    id?: number
    nombre: string
    nEquipos?: number
    creacion?: Date | string
  }

  export type EquipoCreateManyCampeonatoInput = {
    id?: number
    nombre: string
    abreviatura: string
    idCategoria: number
    email: string
    telefono: string
    url_logo: string
  }

  export type CategoriaUpdateWithoutCampeonatoInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    nEquipos?: IntFieldUpdateOperationsInput | number
    creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    equipos?: EquipoUpdateManyWithoutCategoriaNestedInput
  }

  export type CategoriaUncheckedUpdateWithoutCampeonatoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    nEquipos?: IntFieldUpdateOperationsInput | number
    creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    equipos?: EquipoUncheckedUpdateManyWithoutCategoriaNestedInput
  }

  export type CategoriaUncheckedUpdateManyWithoutCampeonatoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    nEquipos?: IntFieldUpdateOperationsInput | number
    creacion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EquipoUpdateWithoutCampeonatoInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    abreviatura?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    url_logo?: StringFieldUpdateOperationsInput | string
    categoria?: CategoriaUpdateOneRequiredWithoutEquiposNestedInput
  }

  export type EquipoUncheckedUpdateWithoutCampeonatoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    abreviatura?: StringFieldUpdateOperationsInput | string
    idCategoria?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    url_logo?: StringFieldUpdateOperationsInput | string
  }

  export type EquipoUncheckedUpdateManyWithoutCampeonatoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    abreviatura?: StringFieldUpdateOperationsInput | string
    idCategoria?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    url_logo?: StringFieldUpdateOperationsInput | string
  }

  export type EquipoCreateManyCategoriaInput = {
    id?: number
    nombre: string
    abreviatura: string
    idCampeonato: number
    email: string
    telefono: string
    url_logo: string
  }

  export type EquipoUpdateWithoutCategoriaInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    abreviatura?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    url_logo?: StringFieldUpdateOperationsInput | string
    campeonato?: CampeonatoUpdateOneRequiredWithoutEquiposNestedInput
  }

  export type EquipoUncheckedUpdateWithoutCategoriaInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    abreviatura?: StringFieldUpdateOperationsInput | string
    idCampeonato?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    url_logo?: StringFieldUpdateOperationsInput | string
  }

  export type EquipoUncheckedUpdateManyWithoutCategoriaInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    abreviatura?: StringFieldUpdateOperationsInput | string
    idCampeonato?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    url_logo?: StringFieldUpdateOperationsInput | string
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
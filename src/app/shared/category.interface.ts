/** 類型（第一層） */
export const TypeTabs = ['Array', 'Collection', 'Date', 'Function', 'Lang', 'Math', 'Number', '物件', 'Seq', 'String', 'Util'];

/** Array */
export const ArrayItems = [
	'_.chunk', '_.compact', '_.concat', '_.difference', '_.differenceBy', '_.differenceWith',
	'_.drop', '_.dropRight', '_.dropRightWhile', '_.dropWhile', '_.fill', '_.findIndex', '_.findLastIndex',
	'_.first', // head
	'_.flatten', '_.flattenDeep', '_.flattenDepth', '_.fromPairs', '_.head', '_.indexOf', '_.initial',
	'_.intersection', '_.intersectionBy', '_.intersectionWith', '_.join', '_.last', '_.lastIndexOf', '_.nth',
	'_.pull', '_.pullAll', '_.pullAllBy', '_.pullAllWith', '_.pullAt', '_.remove', '_.reverse', '_.slice',
	'_.sortedIndex', '_.sortedIndexBy', '_.sortedIndexOf', '_.sortedLastIndex', '_.sortedLastIndexBy', '_.sortedLastIndexOf',
	'_.sortedUniq', '_.sortedUniqBy', '_.tail', '_.take', '_.takeRight', '_.takeRightWhile', '_.takeWhile',
	'_.union', '_.unionBy', '_.unionWith', '_.uniq', '_.uniqBy', '_.uniqWith', '_.unzip', '_.unzipWith',
	'_.without', '_.xor', '_.xorBy', '_.xorWith', '_.zip', '_.zipObject', '_.zipObjectDeep', '_.zipWith'
];

/** Collection */
export const CollectionItems = [
	'_.countBy', '_.each', '_.eachRight', '_.every', '_.filter', '_.find', '_.findLast',
	'_.flatMap', '_.flatMapDeep', '_.flatMapDepth', '_.forEach', '_.forEachRight', '_.groupBy',
	'_.includes', '_.invokeMap', '_.keyBy', '_.map', '_.orderBy', '_.partition', '_.reduce',
	'_.reduceRight', '_.reject', '_.sample', '_.sampleSize', '_.shuffle', '_.size', '_.some', '_.sortBy'
];

/** Date */
export const DateItems = [
	'_.now'
];

/** Function */
export const FunctionItems = [
	'_.after', '_.ary', '_.before', '_.bind', '_.bindKey', '_.curry', '_.curryRight', '_.debounce',
	'_.defer', '_.delay', '_.flip', '_.memoize', '_.negate', '_.once', '_.overArgs', '_.partial',
	'_.partialRight', '_.rearg', '_.rest', '_.spread', '_.throttle', '_.unary', '_.wrap'
];

/** Lang */
export const LangItems = [
	'_.castArray', '_.clone', '_.cloneDeep', '_.cloneDeepWith', '_.cloneWith', '_.conformsTo',
	'_.eq', '_.gt', '_.gte', '_.isArguments', '_.isArray', '_.isArrayBuffer', '_.isArrayLike',
	'_.isArrayLikeObject', '_.isBoolean', '_.isBuffer', '_.isDate', '_.isElement', '_.isEmpty',
	'_.isEqual', '_.isEqualWith', '_.isError', '_.isFinite', '_.isFunction', '_.isInteger',
	'_.isLength', '_.isMap', '_.isMatch', '_.isMatchWith', '_.isNaN', '_.isNative', '_.isNil',
	'_.isNull', '_.isNumber', '_.isObject', '_.isObjectLike', '_.isPlainObject', '_.isRegExp',
	'_.isSafeInteger', '_.isSet', '_.isString', '_.isSymbol', '_.isTypedArray', '_.isUndefined',
	'_.isWeakMap', '_.isWeakSet', '_.lt', '_.lte', '_.toArray', '_.toFinite', '_.toInteger',
	'_.toLength', '_.toNumber', '_.toPlainObject', '_.toSafeInteger', '_.toString'
];

/** Math */
export const MathItems = [
	'_.add', '_.ceil', '_.divide', '_.floor', '_.max', '_.maxBy', '_.mean', '_.meanBy',
	'_.min', '_.minBy', '_.multiply', '_.round', '_.subtract', '_.sum', '_.sumBy'
];

/** Number */
export const NumberItems = [
	'_.clamp', '_.inRange', '_.random'
];

/** 物件 */
export const ObjectItems = [
	'_.assign', '_.assignIn', '_.assignInWith', '_.assignWith', '_.at', '_.create', '_.defaults',
	'_.defaultsDeep', '_.entries', '_.entriesIn', '_.extend', '_.extendWith', '_.findKey',
	'_.findLastKey', '_.forIn', '_.forInRight', '_.forOwn', '_.forOwnRight', '_.functions',
	'_.functionsIn', '_.get', '_.has', '_.hasIn', '_.invert', '_.invertBy', '_.invoke', '_.keys',
	'_.keysIn', '_.mapKeys', '_.mapValues', '_.merge', '_.mergeWith', '_.omit', '_.omitBy',
	'_.pick', '_.pickBy', '_.result', '_.set', '_.setWith', '_.toPairs', '_.toPairsIn',
	'_.transform', '_.unset', '_.update', '_.updateWith', '_.values', '_.valuesIn'
];

/** Seq */
export const SeqItems = [
	'_.chain', '_.tap', '_.thru'
];

/** String */
export const StringItems = [
	'_.camelCase', '_.capitalize', '_.deburr', '_.endsWith', '_.escape', '_.escapeRegExp',
	'_.kebabCase', '_.lowerCase', '_.lowerFirst', '_.pad', '_.padEnd', '_.padStart', '_.parseInt',
	'_.repeat', '_.replace', '_.snakeCase', '_.split', '_.startCase', '_.startsWith', '_.template',
	'_.toLower', '_.toUpper', '_.trim', '_.trimEnd', '_.trimStart', '_.truncate', '_.unescape',
	'_.upperCase', '_.upperFirst', '_.words'
];

/** Util */
export const UtilItems = [
	'_.attempt', '_.cond', '_.conforms', '_.constant', '_.defaultTo', '_.flow', '_.flowRight',
	'_.identity', '_.iteratee', '_.matches', '_.matchesProperty', '_.method', '_.methodOf',
	'_.mixin', '_.noop', '_.nthArg', '_.over', '_.overEvery', '_.overSome', '_.property',
	'_.propertyOf', '_.range', '_.rangeRight', '_.stubArray', '_.stubFalse', '_.stubObject',
	'_.stubString', '_.stubTrue', '_.times', '_.toPath', '_.uniqueId'
];

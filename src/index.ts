import MockServerClientDispatcher from './MockServerClientDispatcher';
import MockServerClientHelper from './helpers/MockServerClientHelper';
import RequestMatcherBuilder from './builders/RequestMatcherBuilder';
import ResponseActionBuilder from './builders/actions/ResponseActionBuilder';
import ForwardActionBuilder from './builders/actions/ForwardActionBuilder';
import ExpectationBuilder from './builders/ExpectationBuilder';
import { MockServerConnection } from './types';

/**
 * Facade function for MockServerClientDispatcher
 * @param {MockServerConnection} configuration
 * @return {MockServerClientDispatcher}
 */
export function client(
  configuration: MockServerConnection,
): MockServerClientDispatcher {
  return new MockServerClientDispatcher(MockServerClientHelper.initClient(configuration));
}

/**
 * Facade function for RequestMatcherBuilder
 * @return RequestMatcherBuilder
 */
export function request(): RequestMatcherBuilder {
  return new RequestMatcherBuilder();
}

/**
 * Facade function for ResponseActionBuilder
 * @return ResponseActionBuilder
 */
export function response(): ResponseActionBuilder {
  return new ResponseActionBuilder();
}

/**
 * Facade function for ForwardActionBuilder
 * @return ForwardActionBuilder
 */
export function forward(): ForwardActionBuilder {
  return new ForwardActionBuilder();
}

/**
 * Facade function for ExpectationBuilder
 * @return ExpectationBuilder
 */
export function expectation(): ExpectationBuilder {
  return new ExpectationBuilder();
}

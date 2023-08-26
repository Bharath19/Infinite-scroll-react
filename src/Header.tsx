import React from 'react';

export const Header = () => {
  return (
    <>
      <h1>This is Infinite scroll example using Intersection Observer API!</h1>
      <p style={{ fontSize: 18 }}>
        As per the MDN docs, Intersection Observer API provides a way to
        asynchronously observe changes in the intersection of a target with an
        ancestor element or with top level documents's viewport{' '}
        <a
          style={{ fontSize: 17 }}
          href="https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API"
          target="_blank"
        >
          Click here to read more
        </a>
      </p>
    </>
  );
};

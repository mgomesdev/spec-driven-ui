"use client";

import { Button } from '@/components/atoms/button/button';

export default function TestButtonPage() {
  return (
    <div className="p-8 space-y-8">
      <h1 className="text-2xl font-bold">Test Button</h1>

      <section>
        <h2 className="text-lg font-semibold mb-4">Variantes</h2>
        <div className="flex gap-4 flex-wrap">
          <div data-testid="variant-primary">
            <Button variant="primary">Primary</Button>
          </div>
          <div data-testid="variant-secondary">
            <Button variant="secondary">Secondary</Button>
          </div>
          <div data-testid="variant-outline">
            <Button variant="outline">Outline</Button>
          </div>
          <div data-testid="variant-ghost">
            <Button variant="ghost">Ghost</Button>
          </div>
          <div data-testid="variant-danger">
            <Button variant="danger">Danger</Button>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-lg font-semibold mb-4">Tamanhos</h2>
        <div className="flex gap-4 items-center">
          <div data-testid="size-sm">
            <Button size="sm">Small</Button>
          </div>
          <div data-testid="size-md">
            <Button size="md">Medium</Button>
          </div>
          <div data-testid="size-lg">
            <Button size="lg">Large</Button>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-lg font-semibold mb-4">Estados</h2>
        <div className="flex gap-4">
          <div data-testid="state-disabled">
            <Button disabled>Disabled</Button>
          </div>
          <div data-testid="state-loading">
            <Button loading>Loading</Button>
          </div>
        </div>
      </section>
    </div>
  );
}

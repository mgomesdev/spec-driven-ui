"use client";

import { Button } from "@/components/button/button";

export default function TestButtonPage() {
  return (
    <div>
      <Button data-testid="basic-button">Clique aqui</Button>
      <Button data-testid="button-with-class" className="custom-class">Com classe</Button>
      <Button data-testid="button-with-click" onClick={() => { window.dispatchEvent(new CustomEvent('button-clicked')) }}>
        Clique-me
      </Button>
      
      {/* US-002: Variantes do Button */}
      <Button data-testid="primary-button" variant="primary">Primary</Button>
      <Button data-testid="secondary-button" variant="secondary">Secondary</Button>
      <Button data-testid="ghost-button" variant="ghost">Ghost</Button>
      
      {/* US-003: Estados do Button */}
      <Button data-testid="disabled-button" disabled>Disabled</Button>
      <Button data-testid="enabled-button">Enabled</Button>
    </div>
  );
}

abstract class Conta {
  protected saldo: number;

  constructor(saldoInicial: number) {
    this.saldo = saldoInicial;
  }

  abstract depositar(valor: number): void;

  sacar(valor: number): void {
    if (valor > 0 && valor <= this.saldo) {
      this.saldo -= valor;
      console.log(`Saque de R$${valor} realizado. Novo saldo: R$${this.saldo}`);
    } else {
      console.log("Saldo insuficiente ou valor inválido para saque.");
    }
  }

  consultarSaldo(): number {
    return this.saldo;
  }
}

class ContaCorrente extends Conta {

  private limite: number;

  constructor(saldoInicial: number, limite: number) {
    super(saldoInicial);
    this.limite = limite;
  }

  depositar(valor: number): void {
    if (valor > 0) {
      this.saldo += valor;
      console.log(`Depósito de R$${valor} realizado. Novo saldo: R$${this.saldo}`);
    } else {
      console.log("Valor inválido para depósito.");
    }
  }

  sacar(valor: number): void {
    if (valor > 0 && valor <= (this.saldo + this.limite)) {
      this.saldo -= valor;
      console.log(`Saque de R$${valor} realizado. Novo saldo: R$${this.saldo}`);
    } else {
      console.log("Saldo insuficiente ou limite excedido para saque.");
    }
  }
}

class ContaPoupanca extends Conta {
  private taxaJuros: number;

  constructor(saldoInicial: number, taxaJuros: number) {
    super(saldoInicial);
    this.taxaJuros = taxaJuros;
  }

  aplicarJuros(): void {
    const juros = this.saldo * this.taxaJuros;
    this.saldo += juros;
    console.log(`Juros de R$${juros} aplicados. Novo saldo: R$${this.saldo}`);
  }

  depositar(valor: number): void {
    if (valor > 0) {
      this.saldo += valor;
      console.log(`Depósito de R$${valor} realizado. Novo saldo: R$${this.saldo}`);
    } else {
      console.log("Valor inválido para depósito.");
    }
  }
}

const contaCorrente = new ContaCorrente(1000, 500);
const contaPoupanca = new ContaPoupanca(500, 0.01);

contaCorrente.depositar(200);
contaCorrente.sacar(300);
console.log("Saldo da conta corrente:", contaCorrente.consultarSaldo());

contaPoupanca.depositar(100);
contaPoupanca.aplicarJuros();
console.log("Saldo da conta poupança:", contaPoupanca.consultarSaldo());

const contas: Conta[] = [contaCorrente, contaPoupanca];

contas.forEach(conta => {
  console.log(`Saldo da conta: ${conta.consultarSaldo()}`);
});
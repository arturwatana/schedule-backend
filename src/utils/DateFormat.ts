export class DateFormat {
  formatNewDate(): string {
    return new Intl.DateTimeFormat("pt-BR").format(new Date());
  }
}

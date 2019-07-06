# MIGRATIONS

Creando una base de datos
```c#
public override void Up(){

CreateTable(
  "dbo_Alumnoes"
  c => new 
  {
    ID = c.Int(nullable:false , Identity: true),
    nombre = c.String();
    apellido = c.String();

  })
  .PrimaryKey(t=> i.ID);
SQL("INSERT INTO dbo.Alumnoes (nombre, apellido)" +"SELECT nombre, apellido FROM dbo.Alumnoes ")
DropTable("dbo.Alumnoes");
}

```

```c#
public override void Down(){

CreateTable(
  "dbo_Alumnoes"
  c => new 
  {
    ID = c.Int(nullable:false , Identity: true),
    nombre = c.String();
    apellido = c.String();

  })
  .PrimaryKey(t=> i.ID);
SQL("INSERT INTO dbo.Alumnoes (nombre, apellido)" +"SELECT nombre, apellido FROM dbo.Alumnoes ")
DropTable("dbo.Alumnoes");
}

```
# SEEDING

```c#
context.customer.Add(new Customer{
  first_name = "lusho
}
```
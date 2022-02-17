using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ABC_Marketing.Migrations
{
    public partial class AddToUpdatesDatabase : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "CustomerID",
                table: "Contacts");

            migrationBuilder.DropColumn(
                name: "CustomerID",
                table: "Addresss");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "CustomerID",
                table: "Contacts",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "CustomerID",
                table: "Addresss",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }
    }
}

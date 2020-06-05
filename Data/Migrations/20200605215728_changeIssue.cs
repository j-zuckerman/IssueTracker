using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace issueTracker.Data.Migrations
{
    public partial class changeIssue : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "TicketNumber",
                table: "Issues");

            migrationBuilder.AddColumn<Guid>(
                name: "ProjectId",
                table: "Issues",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"));
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ProjectId",
                table: "Issues");

            migrationBuilder.AddColumn<string>(
                name: "TicketNumber",
                table: "Issues",
                type: "TEXT",
                nullable: true);
        }
    }
}

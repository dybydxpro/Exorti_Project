using ABC_Marketing.Data;
using ABC_Marketing.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace ABC_Marketing.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CustomerController : ControllerBase
    {
        private readonly AppDatabaseContext _db;

        public CustomerController(AppDatabaseContext db)
        {
            _db = db;
        }

        [HttpGet]
        public async Task<ActionResult<List<AppDatabaseContext>>> Get()
        {
            return Ok(await _db.Customers.ToListAsync());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<List<AppDatabaseContext>>> Get(int id)
        {
            var customer =await _db.Customers.FindAsync(id);
            return Ok(customer);
        }

        [HttpGet("maxId")]
        public async Task<ActionResult<List<AppDatabaseContext>>> GetMaxId()
        {
            var maxId = (_db.Customers.Select(q => (int?)q.Id).Max() ?? 0) + 1;
            return Ok(maxId);
        }

        [HttpPost]
        public async Task<ActionResult<List<AppDatabaseContext>>> Post(Customer data)  //Dataset dataset
        {
            _db.Customers.Add(data);
            await _db.SaveChangesAsync();
            return Ok(data);
        }

        [HttpPut]
        public async Task<ActionResult<List<AppDatabaseContext>>> Put(Customer data)
        {
            _db.Customers.Update(data);
            await _db.SaveChangesAsync();
            return Ok(data);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<List<AppDatabaseContext>>> Delete(int? id)
        {
            var data =await _db.Customers.FindAsync(id);
            _db.Customers.Remove(data);          
            await _db.SaveChangesAsync();
            return Ok(data);
        }
    }
}
